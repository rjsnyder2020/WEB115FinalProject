document.getElementById("formButton").addEventListener("click", function(event){
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(document.getElementById("inputEmail").value)){
        openWindow = window.open("about:blank", 'myPop', 'width=600,height=400,left=200,top=200')
        openWindow.document.write(document.getElementById("inputName").value, "'s Meal Plan, Goal: ", document.getElementById("inputGoal").value)
        openWindow.document.write("<br>")
        openWindow.document.write("<br>" + "Day" + '&nbsp&nbsp&nbsp&nbsp&nbsp' + ' Breakfast &nbsp&nbsp' + ' First Snack &nbsp&nbsp' + ' Lunch &nbsp&nbsp' + ' Second Snack &nbsp&nbsp' + ' Dinner')
        openWindow.document.write("<br>" + "-----------------------------------------------------------------------------------")
        openWindow.document.write("<br>" + "Monday: " + document.getElementById("inputMondayBreakfast").value + ' ' + document.getElementById("inputMondaySnack").value + ' ' + document.getElementById("inputMondayLunch").value + ' ' + document.getElementById("inputMondaySnackTwo").value + ' ' + document.getElementById("inputMondayDinner").value)
        openWindow.document.write("<br>")
        openWindow.document.write("<br>" + "Tuesday: " + document.getElementById("inputTuesdayBreakfast").value + ' ' + document.getElementById("inputTuesdaySnack").value + ' ' + document.getElementById("inputTuesdayLunch").value + ' ' + document.getElementById("inputTuesdaySnackTwo").value + ' ' + document.getElementById("inputTuesdayDinner").value)
        openWindow.document.write("<br>")
        openWindow.document.write("<br>" + "Wednesday: " + document.getElementById("inputWednesdayBreakfast").value + ' ' + document.getElementById("inputWednesdaySnack").value + ' ' + document.getElementById("inputWednesdayLunch").value + ' ' + document.getElementById("inputWednesdaySnackTwo").value + ' ' + document.getElementById("inputWednesdayDinner").value)
        openWindow.document.write("<br>")
        openWindow.document.write("<br>" + "Thursday: " + document.getElementById("inputThursdayBreakfast").value + ' ' + document.getElementById("inputThursdaySnack").value + ' ' + document.getElementById("inputThursdayLunch").value + ' ' + document.getElementById("inputThursdaySnackTwo").value + ' ' + document.getElementById("inputThursdayDinner").value)
        openWindow.document.write("<br>")
        openWindow.document.write("<br>" + "Friday: " + document.getElementById("inputFridayBreakfast").value + ' ' + document.getElementById("inputFridaySnack").value + ' ' + document.getElementById("inputFridayLunch").value + ' ' + document.getElementById("inputFridaySnackTwo").value + ' ' + document.getElementById("inputFridayDinner").value)
        openWindow.document.write("<br>")
        openWindow.document.write("<br>" + "Saturday: " + document.getElementById("inputSaturdayBreakfast").value + ' ' + document.getElementById("inputSaturdaySnack").value + ' ' + document.getElementById("inputSaturdayLunch").value + ' ' + document.getElementById("inputSaturdaySnackTwo").value + ' ' + document.getElementById("inputSaturdayDinner").value)
        openWindow.document.write("<br>")
        openWindow.document.write("<br>" + "Sunday: " + document.getElementById("inputSundayBreakfast").value + ' ' + document.getElementById("inputSundaySnack").value + ' ' + document.getElementById("inputSundayLunch").value + ' ' + document.getElementById("inputSundaySnackTwo").value + ' ' + document.getElementById("inputSundayDinner").value)


    }
    else{
        alert("Invalid or No E-mail input")
        event.preventDefault()
    }
    
})

document.getElementById("clearButton").addEventListener("click", function(){
    document.getElementById("inputName").value = ""
    document.getElementById("inputEmail").value = ""
    document.getElementById("inputGoal").value = ""
    document.getElementById("inputMondayBreakfast").value = ""
    document.getElementById("inputMondaySnack").value = ""
    document.getElementById("inputMondayLunch").value = ""
    document.getElementById("inputMondaySnackTwo").value = ""
    document.getElementById("inputMondayDinner").value = ""
    document.getElementById("inputTuesdayBreakfast").value = ""
    document.getElementById("inputTuesdaySnack").value = ""
    document.getElementById("inputTuesdayLunch").value = ""
    document.getElementById("inputTuesdaySnackTwo").value = ""
    document.getElementById("inputTuesdayDinner").value = ""
    document.getElementById("inputWednesdayBreakfast").value = ""
    document.getElementById("inputWednesdaySnack").value = ""
    document.getElementById("inputWednesdayLunch").value = ""
    document.getElementById("inputWednesdaySnackTwo").value = ""
    document.getElementById("inputWednesdayDinner").value = ""
    document.getElementById("inputThursdayBreakfast").value = ""
    document.getElementById("inputThursdaySnack").value = ""
    document.getElementById("inputThursdayLunch").value = ""
    document.getElementById("inputThursdaySnackTwo").value = ""
    document.getElementById("inputThursdayDinner").value = ""
    document.getElementById("inputFridayBreakfast").value = ""
    document.getElementById("inputFridaySnack").value = ""
    document.getElementById("inputFridayLunch").value = ""
    document.getElementById("inputFridaySnackTwo").value = ""
    document.getElementById("inputFridayDinner").value = ""
    document.getElementById("inputSaturdayBreakfast").value = ""
    document.getElementById("inputSaturdaySnack").value = ""
    document.getElementById("inputSaturdayLunch").value = ""
    document.getElementById("inputSaturdaySnackTwo").value = ""
    document.getElementById("inputSaturdayDinner").value = ""
    document.getElementById("inputSundayBreakfast").value = ""
    document.getElementById("inputSundaySnack").value = ""
    document.getElementById("inputSundayLunch").value = ""
    document.getElementById("inputSundaySnackTwo").value = ""
    document.getElementById("inputSundayDinner").value = ""
})

function download(file, text){
    var element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8', + encodeURIComponent(text))
    element.setAttribute('download', file)

    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}
document.getElementById("downloadButton").addEventListener("click", function(){
    var text = openWindow
    var filename = "MealPlan.txt"
    download(filename, text)
})
document.getElementById("printButton").addEventListener("click", function(){
    window.print(openWindow)
})