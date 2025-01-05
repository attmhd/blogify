<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class VerifyIsWriter
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // skip Skip the middleware if the user is trying to access the login page
        if ($request->is('admin/login') || $request->is('admin/register')) {
            return $next($request);
        }

        if (Auth::user() && Auth::user()->role === 'writer') {
            return $next($request);
        }

        return redirect('/');
    }
}
