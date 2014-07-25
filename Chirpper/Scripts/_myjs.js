//"use strict"
////Putting the whole ChirpApp in an object
//var MyChirpApp = {};
////Putting all of the messages in an array
//MyChirpApp.messages = [];
////Putting all of the chirps in an array
//MyChirpApp.Chirps = [];
////Making a variable for my URL to firebase
//MyChirpApp.TweetsUrl = "https://" + document.getElementById("To").value + ".firebasio.com/Tweets.json";
//MyChirpApp.MessagesUrl = "https://" + document.getElementById("To").value + ".firebasio.com/Messages.json";

//var tempObj = {};
//MyChirpApp.dataSent = function (message) {
//    this.message = message;
   
    
//};
//MyChirpApp.WriteMessageTable = function () {
//    var holder = "<table class='table table-striped'>";
//    for (var i in MyChirpApp.messages) {
//        holder += "<tr>";
//        holder += "<td>" + MyChirpApp.messages[i].messages + "</td>";
//        holder += "<td>" + tempObj + "</td>";
//        holder += "<td>" +
//            "<div class='btn btn-warning' onclick='MyApp.ShowUpdateTurtle(" + i + ")'>Edit</div>" +
//            "</td>";
//        holder += "</tr>";
//    }
//    holder += "</table>";
//    document.getElementById("holder1").innerHTML = holder;
//};

//MyChirpApp.WriteChirpTable = function () {
//    var holder = "<table class='table table-striped'>";
//    for (var i in MyChirpApp.Chirps) {
//        holder += "<tr>";
//        holder += "<td>" + MyChirpApp.Chirp[i].name + "</td>";
//        holder += "<td>" +
//            "<div class='btn btn-warning' onclick='MyApp.ShowUpdateTurtle(" + i + ")'>Edit</div>" +
//            "</td>";
//        holder += "</tr>";
//    }
//    holder += "</table>";
//    document.getElementById("holder2").innerHTML = holder;
//};


//MyChirpApp.send = function (typeOfSend) {
    
//    var newurl;
//    if (typeOfSend === 'message-text') {
//        var message = document.getElementById("message-text").value;
//        var To = document.getElementById("To").value;
//        tempObj = new MyChirpApp.dataSent(message);
//        tempObj.To = To;
//        tempObj.time = Date.now;
//        newurl = MyChirpApp.MessagesUrl;
//        document.getElementById("message-text").value = "";
//        document.getElementById("To").value = "";
//    }
    
//    else { 
//        var message = document.getElementById("chirp-this").value;
//        tempObj = new MyChirpApp.dataSent(message);
//        newurl = MyChirpApp.TweetsUrl;
//        document.getElementById("chirp-this").value = "";
//        document.getElementById("To").value = "";
//    }
    
    
//    var request = new XMLHttpRequest();
//    request.open("POST", newurl);


//    request.onload = function () {
//            if (this.status >= 200 && this.status < 400) {
//                console.log(this.response);
                
               
           
               
//            }
//            else { console.log(this.response); }
//        };
//        request.onerror = function () {
//            console.log("Shell Shocked");
//        };
    





//    request.send(JSON.stringify(tempObj));

//};
//MyChirpApp.GetMessagesDB = function () {
//    MyApp.messages = [];
//    var request = new XMLHttpRequest();
//    request.open("GET", MyApp.Url);
//    request.onload = function () {
//        if (this.status >= 200 && this.status < 400) {
//            var data = JSON.parse(this.response);
//            for (var m in data) {
                
//                alert(MyChirpApp.messages.push(data[m]));
//            }
//            MyApp.WriteTable();
//        }
//        else { console.log("Shell Shocked " + this.response); }
//    };
//    request.onerror = function () { console.log("Cowabunga!!!"); };
//    request.send();
//};


//MyChirpApp.GetmessagesDB();




var Tweets = [];
var Chirps = {};
var Messages = {};
var onSendChirp = function (userId, chirpMessageId, sentToId) {
    Chirps.username = document.getElementById(userId).value;
    Chirps.Chirps = document.getElementById(chirpMessageId).value;
    Chirps.url = document.getElementById(sentToId).value;

    var request = new XMLHttpRequest();
    request.open("POST", "https://" + Chirps.url + ".firebaseio.com/Chirps.json");
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log(this.response);

            document.getElementById(chirpMessageId).value = "";
            document.getElementById(sentToId).value = "";
        }


    }
    request.onerror = function () {
        console.log('Error in onSendChirp');
    }

    request.send(JSON.stringify(Chirps));

};

var onSendMessage = function (userId, messageMessageId, sentToId) {
    Messages.username = document.getElementById(userId).value;
    Messages.Messages = document.getElementById(messageMessageId).value;
    Messages.url = document.getElementById(sentToId).value;

    var request = new XMLHttpRequest();
    request.open("POST", "https://" + Messages.url + ".firebaseio.com/Messages.json");
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log(this.response);

            document.getElementById(messageMessageId).value = "";
            document.getElementById(sentToId).value = "";
        }


    }
    request.onerror = function () {
        console.log('Error in onSendChirp');
    }

    request.send(JSON.stringify(Messages));

};

var request = new XMLHttpRequest();
request.open("GET", "https://" + Chirps.url + ".firebaseio.com/Chirps.json");
request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        for (var m in data) {
            MyApp.Tweets.push(data[m]);

        }
    }

}
request.onerror = function () {
    console.log('Error in onSendChirp');
}

request.send(JSON.stringify(Chirps));


var request = new XMLHttpRequest();
request.open("GET", "https://" + Messages.url + ".firebaseio.com/Messages.json");
request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        for (var m in data) {
            MyApp.Tweets.push(data[m]);

        }

    }
};
request.onerror = function () {
    console.log('Error in onSendChirp');
}

request.send(JSON.stringify(Chirps));


//MyChirpApp.WriteTable = function () {
//    var holder = "<table class='table table-striped'>";
//    for (var i in MyApp.Tweets) {
//        holder += "<tr>";
//        holder += "<td>" +  + "</td>";
//        holder += "<td>" +  + "</td>";
//        holder += "<td> URL:" +  + "</td>";
//        holder += "<td>" +
//            "<div class='btn btn-warning' onclick='MyApp.ShowUpdateTurtle(" + i + ")'>Edit</div>" +
//            "</td>";
//        holder += "</tr>";
//    }
//    holder += "</table>";
//    document.getElementById("tableOutput").innerHTML = holder;
//};

    