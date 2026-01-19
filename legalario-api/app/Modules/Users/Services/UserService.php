<?php

namespace App\Modules\Users\Services;

use App\Models\User;

class UserService
{
    public function getAll($page = 1, $perPage = 15 )
    {
        return User::paginate($perPage, ['*'], 'page', $page);
    }

    public function create(array $data) {
        return User::create($data);
    }
}
