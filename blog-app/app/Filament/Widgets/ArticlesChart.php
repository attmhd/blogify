<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Article;

class ArticlesChart extends ChartWidget
{
    protected static ?string $heading = 'Articles Chart';

    protected static ?int $sort = 2;

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Article created',
                    'data' => Article::selectRaw('COUNT(*) as count')
                        ->whereYear('created_at', date('Y'))
                        ->groupByRaw('MONTH(created_at)')
                        ->orderByRaw('MONTH(created_at)')
                        ->pluck('count')
                        ->toArray(),
                ],
            ],
            'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
