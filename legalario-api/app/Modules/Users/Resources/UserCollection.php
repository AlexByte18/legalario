<?php

namespace App\Modules\Users\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection as ResourceCollectionMain;

class UserCollection extends ResourceCollectionMain
{

    public $collects = UserResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
