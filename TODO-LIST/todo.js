var ul=document.getElementById("list")
        var input=document.getElementById("input")

        function add()
        {
        var listitem = document.createElement("li")
        listitem.innerHTML =input.value +"<button onclick='deleteitem(event)'>Delete</button>"
        ul.append(listitem)
        input.value = ""
        }

        function deleteitem(event)
        {
                event.target.parentElement.remove()
        }
