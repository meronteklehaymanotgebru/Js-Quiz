// function Item(name,quantity,price){
//     this.name=name;
//     this.quantity=quantity;
//     this.price=price;
// }
// let items=[
//     new Item("Shampoo",10,80.3),
//     new Item("Lotion",45,100.5),
//     new Item("Diapers",5,50)
function CustomerOrder(orderId, items, status) {
    this.id = orderId;
    this.items = items;
    this.status = status;
    this.calculateTotal = function() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
     this.processPayment = async function() {
        await new Promise((resolve) => {
            setTimeout(() => {
                this.status = "paid";
                console.log(`The payment status for order ${this.id} is ${this.status}`);
                resolve();
            }, 2000);
        });
    };
}


const customerOrders = [
    new CustomerOrder("r01", [{name:"Shampoo", quantity:10, price:200},{name:"Diapers", quantity:30, price:700}], "pending"),
    new CustomerOrder("r02", [{name:"Lotion", quantity:50, price:100}], "paid"),
    new CustomerOrder("r03", [{name:"Diapers", quantity:30, price:700}], "pending"),
];
customerOrders.forEach(order => {
    console.log(`Order ${order.id} total: ${order.calculateTotal()}`);
});
customerOrders[2].processPayment();

// number2
function TeamMember(name,role,tasks){
this.name=name;
this.role=role;
this.tasks=tasks;
}
TeamMember.prototype.completeTask=function(taskTitle){
    let title=taskTitle.toLowerCase()
  for(task in this.tasks){
    let tas=this.tasks[task]
    if(tas.title.toLowerCase()==title && tas.completed){
        console.log(`${taskTitle} Task is completed`);
    }
    else{
         console.log(`${taskTitle} Task is not completed`);
    }
  }
    
}

TeamMember.prototype.checkProgress = function() {
  const hasPending = this.tasks.filter(task => !task.completed).length>0;
  return new Promise((resolve, reject) => {
    if (hasPending) {
      reject("There are pending tasks");
    } else {
      resolve("All tasks are completed");
    }
  });
};

const member=[
new TeamMember("Meron","Admin",[{title:"app",completed:true},{title:"web",completed:false}]),
new TeamMember("Jorda","PM",[{title:"app",completed:false},{title:"web",completed:false}])

]

member.forEach(teamMember => {
  teamMember.completeTask("web");
});
member[0].checkProgress()
  .then(msg => console.log(msg))
  .catch(error => console.log(error));
//   number3
function Candidate(name,position,interviews){
    this.name=name;
    this.position=position;
    this.interviews=interviews;
    this.scheduled=[]
    this.scheduleInterview=function(date){
        for(i=0;i<interviews.length;i++){
 if(i.status=="pending"){
          this.scheduled.push({interview:i,date:`${date}`});
        }
        }
       
    }
    this.sendConfirmation=async function (){
    return new Promise((resolve)=>{
setTimeout(()=>{
resolve(`Interview confirmed with ${this.name} `)
},1000)
    });
};

}

function Candidate(name, position, interviews) {
    this.name = name;
    this.position = position;
    this.interviews = interviews;
    this.scheduled = [];
    this.scheduleInterview = function(date) {
        for (let interview of this.interviews) {
            if (interview.status === "pending") {
                this.scheduled.push({ interview: interview, date: `${date}` });
            }
        }
    };
    this.sendConfirmation = async function() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Interview confirmed with ${this.name}`);
            }, 1000);
        });
    };
}
const interviews = [
  { status: "pending", date: null },
  { status: "done", date: "2025-05-20" }
];
const candidate = new Candidate("Meron", "Developer", interviews);

candidate.scheduleInterview("2025-05-28");
console.log(candidate.scheduled);
candidate.sendConfirmation().then(msg => console.log(msg));
// number4
function Course(title,instructor,students){
    this.title=title;
    this.instructor=instructor;
    this.students=students;
    this.updateProgress=function(studentName,value){
     for(stu of students){
        if(studentName==stu.name){
            stu.progress+=value
            console.log(`${studentName} here is your updated score ${stu.progress}`)
        }
     }
    }
    this.generateCertificate=async function(studentName){
    for(stu of students){

      return new Promise((resolve,reject)=>{
      if(stu.name==studentName && stu.progress==100){
        resolve(`${studentName} deserves a certificate `)
        }
        else{
            reject(`${studentName} Incomplete progress`)
        }
        })
     
    }
}
}
let allStudents=[{name:"Meron",progress:100},{name:"Jorda",progress:200},{name:"Vicky",progress:50}
]
let course=new Course("JS","Hunter",allStudents);
course.updateProgress("Meron",80);
course.generateCertificate("Meron").then(msg=>console.log(msg)).catch(error=>console.log(error));
// number5
function StockTracker(watchList){
    this.watchList=watchList;
    this.updatePrice=function(symbol,newPrice){
        for(stock of this.watchList){
            if(symbol==stock.symbol){
                stock.currentPrice+=newPrice
                console.log(`This is the updated price ${stock.currentPrice}`);
            }
        }
    }
    this.checkAlerts=async function(){
        result=this.watchList.filter(stock=>stock.price>=threshold)
        for (stock of this.watchList){
            let result=
         return new Promise ((resolve,reject)=>{
if(result){
    resolve()
}
         })
        }
    }
}
