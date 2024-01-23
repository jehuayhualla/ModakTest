// useFavoriteEventsStore.ts
import {EventResponse} from '@app/libs/types';
import {create} from 'zustand';

type FavoriteEventsState = {
  favoriteEvents: EventResponse[];
  addEvent: (event: EventResponse) => void;
  removeEvent: (eventP: EventResponse) => void;
  clearFavorites: () => void;
};

const useFavoriteEventsStore = create<FavoriteEventsState>(set => ({
  favoriteEvents: [],
  addEvent: event =>
    set(state => ({favoriteEvents: [...state.favoriteEvents, event]})),
  removeEvent: eventP =>
    set(state => ({
      favoriteEvents: state.favoriteEvents.filter(
        event => event.id !== eventP.id,
      ),
    })),
  clearFavorites: () => set({favoriteEvents: []}),
}));

export default useFavoriteEventsStore;
