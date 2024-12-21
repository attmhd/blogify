<?php

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Component;
use Filament\Pages\Auth\Register as AuthRegister;

class RegisterUser extends AuthRegister
{
    protected function getForms(): array
    {
        return [
            'form' => $this->form(
                $this->makeForm()
                    ->schema([
                        $this->getNameFormComponent(),
                        $this->getEmailFormComponent(),
                        $this->getPasswordFormComponent(),
                        $this->getPasswordConfirmationFormComponent(),
                        $this->getRoleFormComponent(),
                    ])
                    ->statePath('data')
            ),
        ];
    }
 
    protected function getRoleFormComponent(): Component
    {
        return Select::make('role')
            ->options([
                'writer' => 'Writer',
                'reader' => 'Reader',
            ])
            ->default('reader')
            ->required();
    }
}
?>
