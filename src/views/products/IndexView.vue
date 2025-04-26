<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>
<template>
  <app-section-wrapper>
    <ul class="flex gap-1 mb-3">
      <li>Home</li>
      <li>></li>
      <li>Casual</li>
    </ul>
    <div class="grid grid-cols-4 grid-rows-3 gap-4">
      <div class="row-span-3 border">
        <div>
          <h2>Filter</h2>
          <Icon icon="heroicons:adjustments-vertical-16-solid" width="16" height="16" />
        </div>
        <div class="bg-gray-500 h-0.5 w-full"></div>
        <form method="GET">
          <fieldset>
            <legend class="mb-2">Dress Style</legend>
            <div class="space-y-2">
              <div>
                <input type="checkbox" id="category_casual" />
                <label for="category_casual">Casual</label>
              </div>
              <div>
                <input type="checkbox" id="category_party" />
                <label for="category_party">Party</label>
              </div>
              <div>
                <input type="checkbox" id="category_gym" />
                <label for="category_gym">Gym</label>
              </div>
              <div>
                <input type="checkbox" id="category_formal" />
                <label for="category_formal">Formal</label>
              </div>
            </div>
          </fieldset>
          <app-dark-button type="submit">Apply Filter</app-dark-button>
        </form>
      </div>
      <div class="row-span-3 col-span-3">
        <div class="flex justify-between m-3">
          <h2 class="text-3xl font-bold">Casual</h2>
          <p>
            Showing 1-9 of 100 Products Sort by: <span class="font-semibold">Most Popular</span>
          </p>
        </div>
        <div class="grid grid-cols-3 grid-rows-3 gap-6 m-5 items-center justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div class="text-center">Pagination</div>
      </div>
    </div>
  </app-section-wrapper>
</template>
