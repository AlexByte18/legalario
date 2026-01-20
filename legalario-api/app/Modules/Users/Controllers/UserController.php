<?php

namespace App\Modules\Users\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Users\Services\UserService;
use App\Modules\Users\Resources\UserCollection;
use App\Modules\Users\Resources\UserResource;
use App\Modules\Users\Requests\CreateUserRequest;

class UserController extends Controller
{
    function __construct(
        private readonly UserService $userService,
    ) {}

    public function index()
    {
        $search = request()->query('search');
        $users = $this->userService->getAll(search: $search);
        return new UserCollection($users);
    }

    public function create(CreateUserRequest $request)
    {
        logger()->info('Create user request data:', $request->all());
        $data = $request->validated();
        $user = $this->userService->create($data);
        return UserResource::make($user);

    }
}
