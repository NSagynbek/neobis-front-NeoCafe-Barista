function capitalizeFirstLetter(string) {
  const translations = {
      "menu": "Меню",
      "orders": "Заказы",
      "profile": "Профиль",
  };

  return translations[string] || null;
}



const addIconStyles = { 
  color:"white", 
  width:"25px", 
  height:"25px", 
}

const notificationIconStyles = { 
  background:"#5B7E9A", 
  color:"white", 
  width:"40px", 
  height:"40px", 
  padding:"5px", 
  borderRadius:"30px" 
}

const menuItemDeleteIconStyle = {
  color:"#F45656"
}

const editDeleteIconsStyles = {color: "#2A3440"}
const sideBarIconsStyles = { color: "white" }
const menuCategoryArrowIconStyles = {color:"#5B7E9A"}

const days = [
  'Пн',
  'Вт',
  'Ср',
  'Чт',
  'Пт',
  'Сб',
  'Вс',
];

const employeePositions = {
  position1:"Бармен",
  position2:"Официант"
}

const stockPositions = {
  position1:"Готовая продукция",
  position2:"Сырье"
}

const branchSelectirTypes = {
  stock:"stock",
  employees:"employees",
  newEmploye:"newEmploye",
}

const stockCategoryTypes = {
  newEmploye:"newEmployee",
  stock:"stock",
}

const coffeeOptionsStyles = {
  fontSize: "20px", 
  color: "#2A3440",
  fontWeight:"400",
}

const coffeeOptionsSecondStyles = {
  color:"#5B7E9A"
}

export{
  capitalizeFirstLetter,
  addIconStyles,
  notificationIconStyles,
  editDeleteIconsStyles,
  sideBarIconsStyles,
  menuCategoryArrowIconStyles,
  menuItemDeleteIconStyle,
  days,
  employeePositions,
  stockPositions,
  branchSelectirTypes,
  stockCategoryTypes,
  coffeeOptionsStyles,
  coffeeOptionsSecondStyles
}