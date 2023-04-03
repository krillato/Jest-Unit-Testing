export  function CheckBills(person:number){
        let IsPay:number = 0;
        let freeNumber:number = 0;
          for (let i = 0; i < person; i++) {
        if(i % 4 ==0){
            freeNumber++;
        }
    }
    if(person%4==0){
        let AllPersonSouldPay = person-freeNumber;
        let Mypay =AllPersonSouldPay *340;
        IsPay = Mypay + (Mypay*0.1)
    }else{
        IsPay = (person*340)+((person*340)*0.1)
    }
      
    const mock_all_person = {
        person: person,
        charge: 10,
        price: 340,
        pay:IsPay,
      }

      return mock_all_person 
      }
       
    
