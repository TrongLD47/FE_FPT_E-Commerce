{
  const tabList = document.querySelector(".tab-list");
  const tabItems = tabList.querySelectorAll(".tab-item");
  const tabSubItems = tabList.querySelectorAll(".tab-subItem");
  tabSubItems.forEach((_) => _.addEventListener("click", handleTabChange(tabItems)));
  function handleTabChange(tabItems) {
    if (tabItems.target.classList.contains("active")) return;
    tabItems.forEach((_) => _.classList.remove("active"));
    tabItems.target.classList.add("active");
  }
}
