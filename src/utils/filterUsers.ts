export const filterUsers = (users: any[], query: string, selectedCity: string, highlightOldest: boolean) => {
  let filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase())
  );

  if (selectedCity) {
    filteredUsers = filteredUsers.filter((user) => user.city === selectedCity);
  }

  if (highlightOldest) {
    const oldestUsers = filteredUsers.reduce((acc, user) => {
      const city = user.city;
      if (!acc[city] || new Date(user.birthDate) < new Date(acc[city].birthDate)) {
        acc[city] = user;
      }
      return acc;
    }, {} as { [key: string]: any });

    filteredUsers = filteredUsers.map((user) => ({
      ...user,
      isHighlighted: user.id === oldestUsers[user.city]?.id,
    }));
  }

  return filteredUsers;
};
