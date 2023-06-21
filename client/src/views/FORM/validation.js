const validation = (form) => {

    let errors = { flag:false };
  
    //Name
    if (!form.name.trim()){
        errors.name = "These characters are required."; 
        errors.flag = true;           
    } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())){
        errors.name = "This feature must contain only letters.";  
        errors.flag = true;          
    }
//image
    if (!form.image){
        errors.image = "These characters are required."; 
        errors.flag = true;       
    }        
//attack
    if (!form.attack){
        errors.attack = "These characters are required.";
        errors.flag = true;
    } else if(form.attack < 1 || form.attack > 100){
        errors.attack = "The value must be between 1 and 100.";
        errors.flag = true;
    }
//defense
    if (!form.defense){
        errors.defense = "These characters are required.";
        errors.flag = true;
    }else if (form.defense < 1 || form.defense > 100) {
        errors.defense = "The value must be between 1 and 100.";
        errors.flag = true;
    }
//speed
    if (!form.speed){
        errors.speed = "These characters are required.";
        errors.flag = true;
    } else if (form.speed < 1 || form.speed > 100) {
        errors.speed = "The value must be between 1 and 100.";
        errors.flag = true;
      }
//hp
    if (!form.hp){
        errors.hp = "These characters are required.";
        errors.flag = true;
    } else if (form.hp < 1 || form.hp > 100) {
        errors.hp = "The value must be between 1 and 100.";
        errors.flag = true;
      }
//weight
    if (!form.weight){
        errors.weight = "These characters are required.";
        errors.flag = true;
    } else if (form.weight < 1 || form.weight > 100) {
        errors.weight = "The value must be between 1 and 100.";
        errors.flag = true;
      }
//height
    if (!form.height){
        errors.height = "These characters are required.";
        errors.flag = true;
    } else if (form.height < 1 || form.height > 100) {
        errors.height = "The value must be between 1 and 100.";
        errors.flag = true;
      }

    return errors;
}


export default validation;