function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null; // 如果找不到參數，返回 null
}

// 使用範例
const activeTabname = getQueryVariable("tabname");
console.log(activeTabname);

// pills-personInfo-tab  pills-bookingRec-tab  pills-travelPlan-tab

window.onload = function () {
  if (activeTabname == "booking") {
    document.getElementById("pills-bookingRec-tab").click();
  } else if (activeTabname == "planning") {
    document.getElementById("pills-travelPlan-tab").click();
  } else {
    document.getElementById("pills-personInfo-tab").click();
  }
};
