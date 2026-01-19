<?php

namespace App\Modules\Users\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Users\Services\UserService;
use App\Modules\Users\Resources\UserCollection;

class UserController extends Controller
{
    function __construct(
        private readonly UserService $userService,
    ) {}

    public function index()
    {
        $users = $this->userService->getAll();
        return new UserCollection($users);
    }
}
