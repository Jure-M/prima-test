import React, { useReducer, createContext } from "react";
import moment from "moment";

import { availableRoomsFilter, addRoomToCart } from "../utils/utils";

const initialState = {
  rooms: [
    {
      id: 9466,
      name: "Deluxe Suite",
      thumb_main: "./../images/rooms/suite/thumb_main.jpg",
      thumb_rooms: "./../images/rooms/suite/thumb_rooms.jpg",
      imgUrlGallery: [
        {
          original: "./../images/rooms/suite/img-1.jpg",
          thumbnail: "./../images/rooms/suite/img-1s.jpg",
        },
        {
          original: "./../images/rooms/suite/img-2.jpg",
          thumbnail: "./../images/rooms/suite/img-2s.jpg",
        },
        {
          original: "./../images/rooms/suite/img-3.jpg",
          thumbnail: "./../images/rooms/suite/img-3s.jpg",
        },
        {
          original: "./../images/rooms/suite/img-4.jpg",
          thumbnail: "./../images/rooms/suite/img-4s.jpg",
        },
        {
          original: "./../images/rooms/suite/img-5.jpg",
          thumbnail: "./../images/rooms/suite/img-5s.jpg",
        },
        {
          original: "./../images/rooms/suite/img-6.jpg",
          thumbnail: "./../images/rooms/suite/img-6s.jpg",
        },
        {
          original: "./../images/rooms/suite/img-7.jpg",
          thumbnail: "./../images/rooms/suite/img-7s.jpg",
        },
        {
          original: "./../images/rooms/suite/img-8.jpg",
          thumbnail: "./../images/rooms/suite/img-8s.jpg",
        },
        {
          original: "./../images/rooms/suite/img-9.jpg",
          thumbnail: "./../images/rooms/suite/img-9s.jpg",
        },
      ],
      occupancy: 4,
      size: 33,
      beds: "King size",
      view: "Square",
      description: {
        ENG: `Modernly decorated and equipped with additional amenities, with one king size bed and one
          couch , deluxe suite offers perfect escape and break from the hustle and bustle of the city
          center.`,
        HRV: `
          Moderno uređena i opremljen dodatnim sadržajima, s jednim krevetom king size i 
          dvosjedom na razvlačenje, luksuzni soba nudi savršen bijeg i odmor iz gradske vreve.
          `,
      },
      basePrice: 59,
      available: false,
    },
    {
      id: 9467,
      name: "Deluxe Double",
      thumb_main: "../images/rooms/double/thumb_main.jpg",
      thumb_rooms: "./../images/rooms/double/thumb_rooms.jpg",
      imgUrlGallery: [
        {
          original: "./../images/rooms/double/img-1.jpg",
          thumbnail: "./../images/rooms/double/img-1s.jpg",
        },
        {
          original: "./../images/rooms/double/img-2.jpg",
          thumbnail: "./../images/rooms/double/img-2s.jpg",
        },
        {
          original: "./../images/rooms/double/img-3.jpg",
          thumbnail: "./../images/rooms/double/img-3s.jpg",
        },
        {
          original: "./../images/rooms/double/img-4.jpg",
          thumbnail: "./../images/rooms/double/img-4s.jpg",
        },
        {
          original: "./../images/rooms/double/img-5.jpg",
          thumbnail: "./../images/rooms/double/img-5s.jpg",
        },
        {
          original: "./../images/rooms/double/img-6.jpg",
          thumbnail: "./../images/rooms/double/img-6s.jpg",
        },
        {
          original: "./../images/rooms/double/img-7.jpg",
          thumbnail: "./../images/rooms/double/img-7s.jpg",
        },
        {
          original: "./../images/rooms/double/img-8.jpg",
          thumbnail: "./../images/rooms/double/img-8s.jpg",
        },
      ],
      occupancy: 2,
      size: 25,
      beds: "King size",
      view: "No view",
      description: {
        ENG: `Modernly decorated and equipped with additional amenities, with  king size  
        deluxe room offers perfect escape and break from the hustle and bustle of the city
        center.`,
        HRV: `
        Moderno uređena i opremljen dodatnim sadržajima, s king size krevetom 
        deluxe soba nudi savršen bijeg i odmor iz gradske vreve
        .`,
      },
      basePrice: 49,
      available: false,
    },
    {
      id: 9468,
      name: "Deluxe Triple",
      thumb_main: "../images/rooms/triple/thumb_main.jpg",
      thumb_rooms: "./../images/rooms/triple/thumb_rooms.jpg",
      imgUrlGallery: [
        {
          original: "./../images/rooms/triple/img-1.jpg",
          thumbnail: "./../images/rooms/triple/img-1s.jpg",
        },
        {
          original: "./../images/rooms/triple/img-2.jpg",
          thumbnail: "./../images/rooms/triple/img-2s.jpg",
        },
        {
          original: "./../images/rooms/triple/img-3.jpg",
          thumbnail: "./../images/rooms/triple/img-3s.jpg",
        },
        {
          original: "./../images/rooms/triple/img-4.jpg",
          thumbnail: "./../images/rooms/triple/img-4s.jpg",
        },
        {
          original: "./../images/rooms/triple/img-5.jpg",
          thumbnail: "./../images/rooms/triple/img-5s.jpg",
        },
        {
          original: "./../images/rooms/triple/img-6.jpg",
          thumbnail: "./../images/rooms/triple/img-6s.jpg",
        },
      ],
      occupancy: 4,
      size: 18,
      beds: "Singe beds",
      view: "No view",
      description: {
        ENG: `Spacious room including 3 single beds and a couch, or 1 single bed, 1 double bed and 1 couch with
        private bathroom and other convenient amenities.`,
        HRV: `
        Prostrana soba koja uključuje 3 kreveta za jednu osobu i dvosjed na razvlačenje, idealna za obiteljski boravak. Ima
        vlastitu kupaonicu i ostale pogodnosti`,
      },
      basePrice: 54,
      available: false,
    },
  ],
  filter: {},
  cart: [],
  loading: false,
  errors: [],
  message: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_DATES":
      return {
        ...state,
        filter: {
          startAt: action.payload.startAt,
          endAt: action.payload.endAt,
        },
        cart: [],
      };
    case "FIND_AVAILABLE_ROOMS":
      return {
        ...state,
        rooms: availableRoomsFilter(state.rooms, action.payload),
      };
    case "ADD_ROOM_TO_CART":
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room.id === action.payload.id
            ? { ...room, quantity: room.quantity - 1 }
            : room
        ),
        cart: addRoomToCart(state.cart, action.payload),
      };
    case "REMOVE_ROOM_FROM_CART":
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room.id === action.payload.id
            ? { ...room, quantity: room.quantity + action.payload.cartQuantity }
            : room
        ),
        cart: state.cart.filter((room) => room.id !== action.payload.id),
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: action.payload,
      };
    case "REMOVE_ERROR":
      return {
        ...state,
        errors: [],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "REMOVE_LOADING":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export const RoomsContext = createContext();

const RoomsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //set error message
  const setError = (error) => {
    dispatch({ type: "SET_ERROR", payload: error });
  };
  //remove Error message
  const removeError = (error) => {
    dispatch({ type: "SET_ERROR", payload: error });
  };

  // add room to chart
  const addRoomToChart = (room) => {
    dispatch({ type: "ADD_ROOM_TO_CART", payload: room });
  };
  // add room to chart
  const removeRoomFromCart = (room) => {
    dispatch({ type: "REMOVE_ROOM_FROM_CART", payload: room });
  };

  // check in database if rooms are available
  const setSearchDates = async (startAt, endAt) => {
    dispatch({ type: "SET_SEARCH_DATES", payload: { startAt, endAt } });
    dispatch({ type: "SET_LOADING" });
    try {
      const startDate = moment(startAt).format("YYYY-MM-DD");
      const endDate = moment(endAt).format("YYYY-MM-DD");
      const data = await fetch(
        `/api/v1/get?dateFrom=${startDate}&dateTo=${endDate}`
      );
      let availableRooms = [];
      const res = await data.json();
      if (res.length > 0) {
        const rooms = res[0].unitTypes;

        availableRooms = rooms.reduce((accumulator, room) => {
          const quantity = room.availability.reduce(
            (accumulator, roomAvaibilityByDay) => {
              if (roomAvaibilityByDay.value <= accumulator) {
                return roomAvaibilityByDay.value;
              } else {
                return accumulator;
              }
            },
            10
          );
          const totalPrice = room.rates[0].DailyValues.reduce(
            (accumulator, dailyprice) => accumulator + dailyprice.price,
            0
          );

          let available = false;

          if (quantity !== 0) available = true;

          accumulator[room.id] = {
            name: room.name,
            quantity,
            totalPrice: totalPrice * 0.75,
            available,
          };

          return accumulator;
        }, {});
      }

      dispatch({ type: "FIND_AVAILABLE_ROOMS", payload: availableRooms });
      dispatch({ type: "REMOVE_LOADING" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RoomsContext.Provider
      value={{
        state,
        setSearchDates,
        addRoomToChart,
        removeRoomFromCart,
        setError,
        removeError,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};
export default RoomsProvider;
