document.getElementById("mealPlanForm").addEventListener("click", function(){
    flyWindow = window.open("about:blank", 'myPop', 'width=400,height=800,left=200,top=200')
    flyWindow.document.write("This is a temporary window")
})