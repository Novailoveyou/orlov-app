import {
  createStore as createZustandVanillaStore,
  // StateCreator,
} from 'zustand/vanilla'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import packageJson from '@/package.json'
import { Store } from '@/app/_store/model'
import { leadSlice } from '@/entities/lead/store'

export const createStore = () => {
  return createZustandVanillaStore<Store>()(
    devtools(
      persist(
        immer((...props) => ({
          ...leadSlice(...props),
        })),
        {
          name: 'alt-net-store',
          storage:
            process.env.NODE_ENV === 'development' ||
            typeof window === 'undefined'
              ? undefined
              : // : createJSONStorage(() => sessionStorage),
                createJSONStorage(() => sessionStorage),
          // partialize: (state) =>
          //   Object.fromEntries(
          //     Object.entries(state).filter(
          //       ([key]) =>
          //         !(['QNAs'] as (keyof Store)[]).includes(key as keyof Store),
          //     ),
          //   ),
          version: Number(packageJson.version),
        },
      ),
    ),
  )
}
