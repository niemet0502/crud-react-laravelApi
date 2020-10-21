<?php

use Illuminate\Database\Seeder;
use App\Topicality;

class TopicalityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Topicality::class, 30)->create();
    }
}
