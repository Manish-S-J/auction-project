var admin = [{
    user: "m",
    password: "123",
}];
var data = [
    {user: "manas",
    password: "1"
    }, { 
    user: "gokul",
    password: "3"
    },];

    var item1 = [
        { product: "Iphone 6s RoseGold",
        img : "maxresdefault.jpg",
        des : "Apple iPhone 6s smartphone. Announced Sep 2015. Features 4.7' display, Apple A9 chipset, 12 MPprimary camera, 5 MP front camera, 1715 mAh battery and the phone box include Apple earphone attached with apple adapter and charger.",
        price : "25,000",
        minimum : "28000",
     },{
        product: "CSK 2023 Jersey",
        img : "images.jpeg",
        des :  "CSK JERSEY 2023 Yellow T-Shirt features highly breathable fabric to help keep sweat off your skin while you cheer for your team.This T-shirt will wick moisture away from your skin as you start to perspire.",
        price : "700",
        minimum : "1000", 
     },{
        product: "Sports Watch",
        img : "watch.jpeg",
        des : "Casual digital watches are designed for casual wear. They are inexpensive, comfortable to wear and come in traditional designs as well as modern designs.",
        price : "1200",
        minimum : "1500"
    },{
        product: "Apache 150",
        img : "apache-150.jpg",
        des : "This model is the base version of TVS Apache and It was manufactured from the year 2007 till the end of 2011. It is an 147.5 cc Bike with an front Disk and it is an 1 cylinder vechile and it has 2 valves per Cylinder,This model has an Average Mileage of 45kmpl.",
        price : "45000",
        minimum : "48000",
    },];

    let loadFile = function (event) {
        var image = document.getElementById('output');
        var imga = URL.createObjectURL(event.target.files[0]);
        image.src = imga
    }
    var store=[];
    var body = document.querySelector("body");
    // var b4 = document.getElementById("b4");
    var home = document.getElementById("home");
    for (let j = 0; j < item1.length; j++) {

        var div3 = document.createElement("div");
        div3.setAttribute("id","pro" + j);
        div3.setAttribute("style","background-color: rgb(206, 206, 255)");

        var head = document.createElement("h2");
        head.innerHTML = item1[j].product;
        div3.appendChild(head)

        var img1 = document.createElement("img");
        img1.setAttribute("src", item1[j].img);
        img1.setAttribute("style","border: solid 5px black;");
        img1.setAttribute("height","300px");
        img1.setAttribute("width","400px");
        div3.appendChild(img1)

        var b1 = document.createElement("br");
        var b12 = document.createElement("br");
        div3.appendChild(b1);
        div3.appendChild(b12);

        var label = document.createElement("b");
        label.innerHTML = "Description";
        div3.appendChild(label)

        var b31 = document.createElement("br");
        var b33 = document.createElement("br");
        div3.appendChild(b31);
        div3.appendChild(b33);

        var para = document.createElement("p");
        para.setAttribute("style","background-color: rgb(206, 206, 247);");
        para.innerHTML = item1[j].des;
        div3.appendChild(para)

        var b5 = document.createElement("br");
        var b55 = document.createElement("br");
        div3.appendChild(b5);
        div3.appendChild(b55);

        var label2 = document.createElement("label");
        label2.innerHTML = "Price : " + item1[j].price + " INR.";
        div3.appendChild(label2)

        var b6 = document.createElement("br");
        var b66 = document.createElement("br");
        div3.appendChild(b6);
        div3.appendChild(b66);

        var div1 = document.createElement("div");
        div1.setAttribute("id","d" + j);
        div1.setAttribute("style","display : none");
        div3.appendChild(div1);

        var label3 = document.createElement("label");
        label3.innerHTML = "Minimum Price To Be Sold : " + item1[j].minimum + " INR.";
        div1.appendChild(label3)

        var b7 = document.createElement("br");
        var b77 = document.createElement("br");
        div1.appendChild(b7);
        div1.appendChild(b77);
        div3.appendChild(div1);

        var div2 = document.createElement("div");
        div2.setAttribute("id","b" +j);
        //div2.setAttribute("style","display : none");
        div3.appendChild(div2);

        var label4 = document.createElement("label");
        label4.innerHTML = "Bidding Amount:";
        div2.appendChild(label4);

        var fom1 = document.createElement("form");
        fom1.setAttribute("id","fom" + j);
        

        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", "bid" + j);
        fom1.appendChild(input);
        div2.appendChild(fom1);

        var button1 = document.createElement("button");
        button1.innerText = "Bid";
        button1.setAttribute("onclick", "bidd()");
        div2.appendChild(button1);
        div3.appendChild(div2);

        var para2 = document.createElement("h3");
        para2.setAttribute("id","h" + j);
        div3.appendChild(para2);

        var para1 = document.createElement("p");
        para1.setAttribute("style","color : black;");
        para1.setAttribute("style","border-style: ridge;");
        
        div3.appendChild(para1);

        var b9 = document.createElement("br");
        var b99 = document.createElement("br");
        div3.appendChild(b9);
        div3.appendChild(b99);
        home.appendChild(div3);
        body.appendChild(home);
    var storeDet = {
        proId: "pro" + j,
        product : item1[j].product,
        minimumId : "d" + j,
        bidId : "b" + j,
        buttonId : "bid" + j,
        h3Id : "h" + j,
    }
    store.push(storeDet);
    console.log(store);
}

    // indreg() is uesd to open registration page.
    function indreg(){
        var register= document.getElementById("register");
        register.style.display="block";
        var index = document.getElementById("index");
        index.style.display="none";
    }

    // indlog() is used to open login page.
    function indlog(){
        var login= document.getElementById("login");
        login.style.display="block";
        var index = document.getElementById("index");
        index.style.display="none";
    }
    
    // register() is used to register .
    function register() {

        //checkName is used to validate the username
        var name = document.getElementById("name").value;
        var checkName = /^[a-zA-Z\s]/;
        var valuate = checkName.test(name)
        if (valuate == false) {
            document.getElementById("n1").innerHTML = "*Please enter a Valid Username*"
        }
        else if (valuate == true) {
            document.getElementById("n1").innerHTML = ""
        }

        //checkEm is used to validate the email
        var mail = document.getElementById("mail").value;
        let checkEm = /^\S+@\S+\.\S/;
        var valuate2 = checkEm.test(mail)
        if (valuate2 == false) {
            document.getElementById("n2").innerHTML = "*Please enter a Valid mail*"
        }
        else if (valuate2 == true) {
            document.getElementById("n2").innerHTML = ""
        }

        //checkpsw is used to validate the password
        var psw = document.getElementById("psw").value;
        localStorage.setItem("id2", psw)
        let checkPsw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        var valuate3 = checkPsw.test(psw);
        if (valuate3 == false) {
            document.getElementById("n3").innerHTML = "*password must contain min 1('uppercase','lowercase','special charcter','no') & '8-30' characters."
        }
        else if (valuate3 == true) {
            document.getElementById("n3").innerHTML = ""
        }

        //used to check the password
        var new1 = document.getElementById("new1").value;
        if (psw != new1) {
            document.getElementById("n4").innerHTML = "*password not same*"
        }
        else if (psw == new1) {
            document.getElementById("n4").innerHTML = ""
        }

        //valuate4 is used to validate the mobile number
        var no = document.getElementById("no").value;
        var checkNo = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;
        var valuate4 = checkNo.test(no);
        if (valuate4 == false) {
            document.getElementById("n5").innerHTML = "*please enter your 10 digit mobile no without +91*"
        }
        else if (valuate4 == true) {
            document.getElementById("n5").innerHTML = ''
        }

        if (valuate == true && valuate2 == true && valuate3 == true && valuate4 == true && psw == new1) {
            var newData = {
                user: name,
                password: psw,
            }
            data.push(newData);
            //console.log(data);

            var register = document.getElementById("register");
            register.style.display = "none"
            var login = document.getElementById("login");
            login.style.display = "block";
        }
    }
     
     var loginDetails = [];
     for (let n = 0; n < loginDetails.length; n++) {
         var userDet = loginDetails[n].user;
        }
        
    // valuate is used to check the login credentials.
    function valuate() {
        var user = document.getElementById("name1").value;
        var password = document.getElementById("psw1").value;
        for (let i = 0; i < data.length; i++) {
            if (user == admin[0].user && password == admin[0].password) {
                var home = document.getElementById("home");
                home.style.display = "block";
                login.style.display = "none";
                var addbut = document.getElementById("addbut");
                addbut.style.display = "block";
                var st1 = document.getElementById("st1");
                st1.style.display = "block";
                var logut = document.getElementById("logout");
                logut.style.display = "block";
                for (let k = 0; k < item1.length; k++) {
                    document.getElementById("d" + k).style.display="block";
                    document.getElementById("b" + k).style.display="none";
                }
            }
            else if (user == data[i].user && password == data[i].password) {
                login.style.display = "none";
                var home = document.getElementById("home");
                home.style.display = "block";
                var logut = document.getElementById("logout");
                logut.style.display = "block";
                for (let j = 0; j < item1.length; j++) {
                    document.getElementById("d"+j).style.display="none";
                    document.getElementById("b" + j).style.display="block";
                }
                var det = {
                    user: user,
                    password: password,
                }
                loginDetails.push(det);
                console.log(loginDetails);
                over();
            }
        }
    }

     //addbut is used to display the add new product
     function addbut() {
        var add = document.getElementById("add");
        add.style.display = "block"
    }
    var new1 =[];
    function add() {
        // var fom = document.getElementById("fom");
        var product = document.getElementById("product").value;
        var img = document.getElementById('output').src;
        var des = document.getElementById("des").value;
        var price = document.getElementById("price").value;
        var mini = document.getElementById("minimum").value;
        var addform = document.getElementById("addform");
        var items = {
            product: product,
            img: img,
            des : des,
            price: price,
            minimum: mini,
        }
        item1.push(items);
        //console.log(item1);
        addform.reset();
        var add = document.getElementById("add");
        add.style.display = "none";
        new1.push(items);
        console.log(new1);
        upload();
        
        // var item = item1.splice(0,item1.length);
        
    }

    //var store = [];
     //upload is used to display the new product in home page.
     function upload() {
        var a1 = item1.length - 1;
        console.log(a1);
        var body = document.querySelector("body");
        // var b4 = document.getElementById("b4");
        var home = document.getElementById("home");
        for (let j = 0; j < new1.length; j++) {

            var div3 = document.createElement("div");
            div3.setAttribute("id","pro" + a1);
            div3.setAttribute("style","background-color: rgb(206, 206, 255)");

            var head = document.createElement("h2");
            head.innerHTML = new1[j].product;
            div3.appendChild(head)

            var img1 = document.createElement("img");
            img1.setAttribute("src", new1[j].img);
            img1.setAttribute("style","border: solid 5px black;");
            img1.setAttribute("height","300px");
            img1.setAttribute("width","400px");
            div3.appendChild(img1)

            var b1 = document.createElement("br");
            var b12 = document.createElement("br");
            div3.appendChild(b1);
            div3.appendChild(b12);

            var label = document.createElement("b");
            label.innerHTML = "Description";
            div3.appendChild(label)

            var b31 = document.createElement("br");
            var b33 = document.createElement("br");
            div3.appendChild(b31);
            div3.appendChild(b33);

            var para = document.createElement("p");
            para.setAttribute("style","background-color: rgb(206, 206, 247);");
            para.innerHTML = new1[j].des;
            div3.appendChild(para)

            var b5 = document.createElement("br");
            var b55 = document.createElement("br");
            div3.appendChild(b5);
            div3.appendChild(b55);

            var label2 = document.createElement("label");
            label2.innerHTML = "Price : " + new1[j].price + " INR.";
            div3.appendChild(label2)

            var b6 = document.createElement("br");
            var b66 = document.createElement("br");
            div3.appendChild(b6);
            div3.appendChild(b66);

            var div1 = document.createElement("div");
            div1.setAttribute("id","d" + a1);
            div1.setAttribute("style","display : none");
            div3.appendChild(div1);

            var label3 = document.createElement("label");
            label3.innerHTML = "Minimum Price To Be Sold : " + new1[j].minimum + " INR.";
            div1.appendChild(label3)

            var b7 = document.createElement("br");
            var b77 = document.createElement("br");
            div1.appendChild(b7);
            div1.appendChild(b77);
            div3.appendChild(div1);

            var div2 = document.createElement("div");
            div2.setAttribute("id","b" + a1);
            //div2.setAttribute("style","display : none");
            div3.appendChild(div2);

            var label4 = document.createElement("label");
            label4.innerHTML = "Bidding Amount:";
            div2.appendChild(label4);

            var fom1 = document.createElement("form");
            fom1.setAttribute("id","fom" + a1);
            

            var input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("id", "bid" + a1);
            fom1.appendChild(input);
            div2.appendChild(fom1);

            var button1 = document.createElement("button");
            button1.innerText = "Bid";
            button1.setAttribute("onclick", "bidd()");
            div2.appendChild(button1);
            div3.appendChild(div2);

            var para2 = document.createElement("h3");
            para2.setAttribute("id","h" + a1);
            div3.appendChild(para2);

            var para1 = document.createElement("p");
            para1.setAttribute("style","border-style: ridge;");
            div3.appendChild(para1);

            var b9 = document.createElement("br");
            var b99 = document.createElement("br");
            div3.appendChild(b9);
            div3.appendChild(b99);
            home.appendChild(div3);
            body.appendChild(home);
        var storeDet = {
            proId: "pro" + a1,
            product : new1[j].product,
            minimumId : "d" + a1,
            bidId : "b" + a1,
            buttonId : "bid" + a1,
            h3Id : "h" + a1,
        }
        store.push(storeDet);
        console.log(store);
        new1.splice(0,new1.length);
    }
    }

     // bidding is used to store all the bidding values
     var bidding = [];
     
     function bidd() {

        for(let k=0;k < item1.length;k++){
            var Bid = document.getElementById("bid" + k).value;
            var user = document.getElementById("name1").value;
            //console.log(document.getElementById("fom" + k));
            for (n =0;n<loginDetails.length;n++){
                var use = loginDetails[n].user;
            }
            if (Bid >= item1[k].minimum && user == use) {
                for (let l = 0; l < loginDetails.length; l++) {
                    var id2 = loginDetails[l].user;
                }
                var bidS1 = {
                    user: id2,
                    product: item1[k].product,
                    bidding: Bid,
                }
                bidding.push(bidS1);
                console.log(bidding);
                document.getElementById("fom" + k).reset();
                document.getElementById("b" + k).style.display="none";
            }
            else if (Bid >= item1[k].price) {
                document.getElementById("fom" + k).reset();
                document.getElementById("b" + k).style.display="none";
            }
            else{
                //document.getElementById("fom" + k).reset();
                document.getElementById("b" + k).style.display="block";
            }
        }
    }

 //status function is used to display the bidding details in home page.
 var selectedRow = "null";
 function status() {
     var st1 = document.getElementById("st1");
     for (let n = 0; n < bidding.length; n++) {
         var Bid = bidding[n];

         var st1 = document.getElementById("st1");
         var table = document.getElementById("table");
         table.style.display = "block";
         st1.appendChild(table);

         var row = table.insertRow();
         var usercell = row.insertCell(0);
         var productcell = row.insertCell(1);
         var biddscell = row.insertCell(2);
         var soldcell = row.insertCell(3);
         usercell.innerText = Bid.user;
         productcell.innerText = Bid.product;
         biddscell.innerHTML = Bid.bidding;
         soldcell.innerHTML = '<button onclick="sold(this)">Sold</button>';
     }
     bidding.splice(0,bidding.length);
    }

     var soldDetails = [];
    function sold(button) {
        selectedRow = button.parentNode.parentNode;
        // console.log(selectedRow);
        var userX = selectedRow.cells[0].innerHTML;
        var prodX = selectedRow.cells[1].innerHTML;
        var bidX = selectedRow.cells[2].innerHTML;
        for (let x=0;x<item1.length;x++){
            if(prodX == item1[x].product){
                document.getElementById("pro" + x).style.display = "none";
            }
        }
        //It shows the product & bid details which are already sold.
        for (let c = 0; c < soldDetails.length; c++) {
            if (prodX == soldDetails[c].product) {
                alert("Sorry ," + soldDetails[c].product + " is Already Sold To " + soldDetails[c].user);
            }
        }
        var row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
       

        var soldDet = {
            user: userX,
            product: prodX,
            bidX: bidX,
        }
        soldDetails.push(soldDet);
        console.log(soldDetails);
    }

    function over() {
        var user = document.getElementById("name1").value;
        for(let m =0;m < store.length;m++){
            var pro = document.getElementById("pro" + m);
            for (let f = 0; f < soldDetails.length; f++) {
                if( user == soldDetails[f].user && store[m].product.includes(soldDetails[f].product)){
                    pro.style.display = "block";
                    document.getElementById("b" + m).style.display="none";
                    document.getElementById("h" + m).innerHTML = "Congratulation " + soldDetails[f].user + ", " +soldDetails[f].product + " Is Sold To You."; 
                }
                else if (user != soldDetails[f].user && store[m].product == soldDetails[f].product) {
                    pro.style.display = "none";
                    document.getElementById("h" + f).innerHTML = "";
                }
            }
        }
    }

    //logout() is used to logout from the home page.
    function logout() {
        var index = document.getElementById("index");
        index.style.display="none";
         var st1 = document.getElementById("st1");
         st1.style.display = "none";
         var addbut = document.getElementById("addbut");
         addbut.style.display = "none";
         var add = document.getElementById("add");
         add.style.display = "none";
         var home = document.getElementById("home");
         home.style.display = "none";
         var login = document.getElementById("login");
         login.style.display = "block";
         var logout = document.getElementById("logout");
         logout.style.display = "none";
     }

     