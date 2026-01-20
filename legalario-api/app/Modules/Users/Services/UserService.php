<?php

namespace App\Modules\Users\Services;

use App\Models\User;

class UserService
{
    public function getAll($page = 1, $perPage = 50, $search = null )
    {
        $query = User::query();

        if ($search) {
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', '%' . $search . '%')
                  ->orWhere('email', 'like', '%' . $search . '%');
            });
        }

        return $query->paginate($perPage, ['*'], 'page', $page);
    }

    public function create(array $data) {
        return User::create($data);
    }
}
