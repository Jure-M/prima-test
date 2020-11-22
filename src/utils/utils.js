export const availableRoomsFilter = (allRooms, availableRooms) => {
  const selectedRooms = allRooms.map((room) => {
    return {
      ...room,
      totalPrice:
        (availableRooms[room.id] &&
          calculatePrice(availableRooms[room.id].totalPrice, room.occupancy)) ||
        undefined,
      quantity:
        (availableRooms[room.id] && availableRooms[room.id].quantity) || 0,
      available:
        (availableRooms[room.id] && availableRooms[room.id].available) || false,
    };
  });

  return selectedRooms;
};

const calculatePrice = (price, occupancy) => {
  return {
    priceForTwo: price * 0.9,
    priceForThree: price * 1.2 * 0.9,
    priceForFour: price * 1.35 * 0.9,
  };
};

export const addRoomToCart = (cartRooms, roomToAdd) => {
  const existingRoom = cartRooms.find(
    (cartRoom) => cartRoom.id === roomToAdd.id
  );

  if (existingRoom) {
    if (existingRoom.quantity <= existingRoom.cartQuantity) {
      return { ...cartRooms };
    } else {
      return cartRooms.map((cartRoom) =>
        cartRoom.id === existingRoom.id
          ? {
              ...cartRoom,
              cartQuantity: cartRoom.cartQuantity + 1,
              totalPrice: cartRoom.totalPrice + roomToAdd.totalPrice,
              totalPersons:
                cartRoom.totalPersons * 1 + roomToAdd.totalPersons * 1,
            }
          : cartRoom
      );
    }
  }

  return [
    ...cartRooms,
    {
      id: roomToAdd.id,
      name: roomToAdd.name,
      totalPersons: roomToAdd.totalPersons,
      totalPrice: roomToAdd.totalPrice,
      cartQuantity: 1,
    },
  ];
};
