class PaidUser {
    
    constructor (name, email) {
      this.name = name;
      this.email = email;
      this.currentScores = 0;
    }
    
    
    displayNameAndScores (score) {
      
      if (typeof(score) === "number") {
      return `${this.name}, your Recorded Score is: ${score}`;
      } else {
        return `${this.name}, You have no scores at the moment`;
      }
    
    }   
      
    changeEmailAddress (newEmail) {
      this.email = newEmail;
      return `New Email changed successfully, Email: ${this.email}`;
    }
    
   
  }
  
  
  
    class UnPaidUser extends PaidUser {
       
    constructor (name, email) {
      super(name, email);
      
    }
    
    
    displayNameAndScores (score) {
      
      return `${this.name}, Pay monthly subscription fee to view your score`;
     
      
    }
    
    
  }