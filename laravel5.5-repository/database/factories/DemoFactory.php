<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Demo::class, function (Faker $faker) {
    return [
        'name'           => $faker->name,
        'email'          => $faker->unique()->safeEmail,
        'phone'          => $faker->phoneNumber,
        'address'        => $faker->address,
        'description'    => $faker->sentence,
        'is_activate'    => $faker->numberBetween(0, 1),
        'yearly_salary'  => $faker->numberBetween(1, 100),
        'operator'       => 'admin',
        'birthday'       => $faker->date(),
        'deleted_at'     => $faker->boolean ? $faker->dateTime() : '',
    ];
});
