<template>
  <div class="flip flip-vertical w-[315px] overflow-y-hidden">
    <div
      class="front h-[445px]"
      :style="`background-image: url(${props.show.image?.medium ? props.show.image?.medium : 'https://via.placeholder.com/410x590.png?text=No+image'})`"
    />
    <div class="back min-h-full relative py-2 px-4">
      <div class="absolute top-0 right-0 cursor-pointer">
        <Icon
          v-if="ShowStore.isFavorite(props.show)"
          name="ph:heart-fill"
          class="text-6xl p-4"
          @click="ShowStore.removeFromFavorites(props.show)"
        />
        <Icon
          v-else
          name="ph:heart"
          class="text-6xl p-4"
          @click="ShowStore.addToFavorites(props.show)"
        />
      </div>
      <h1 :class="[props.show.name.length < 12 ? 'text-xl' : 'text-2xl', 'text-shadow']">{{ props.show.name }}</h1>
      <div class="">
        <div class="flex items-center">
          <div class="inline-flex items-center mr-1.5">
            <Icon
              name="material-symbols:star"
              class="mr-1"
            />
            <span>{{ props.show.rating.average }}</span>
            <span class="mx-2">|</span>
            <Icon
              name="material-symbols:alarm"
              class="mr-1"
            />
            <span>{{ props.show.averageRuntime }} min</span>
          </div>
        </div>
        <div class="">
          <span>
            {{ formatDate(props.show.premiered) }} - {{ props.show.ended ? formatDate(props.show.ended) : 'today' }}
          </span>
        </div>
        <p
          v-if="props.show.summary?.length"
          v-html="props.show.summary"
          class="max-h-[280px] overflow-y-scroll text-xs"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns'
import { useShowStore } from '~/stores/shows'

const props = defineProps({
  show: {
    type: Object,
    required: true,
  },
})

const ShowStore = useShowStore()

function formatDate (date) {
  return format(new Date(date), 'dd/MM/yyyy')
}
</script>

<style scoped>
.flip {
  position: relative;

  >.front,
  >.back {
    display: block;
    transition-timing-function: cubic-bezier(.2, .2, .2, 1.5);
    transition-duration: .5s;
    transition-property: transform, opacity;
  }

  >.front {
    transform: rotateY(0deg);
  }

  >.back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    transform: rotateY(-180deg);
  }

  &:hover {
    >.front {
      transform: rotateY(180deg);
    }

    >.back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }

  &.flip-vertical {
    >.back {
      transform: rotateX(-180deg);
    }

    &:hover {
      >.front {
        transform: rotateX(180deg);
      }

      >.back {
        transform: rotateX(0deg);
        height: fit-content;
      }
    }
  }
}

.flip {
  position: relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 1em;

  >.front,
  >.back {
    display: block;
    color: white;
    width: inherit;
    background-size: cover !important;
    background-position: center !important;
    background: #313131;
    border-radius: 10px;

    p {
      font-size: 0.9125rem;
      line-height: 160%;
      color: #999;
    }
  }
}

.text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}
</style>
