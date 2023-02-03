package com.BloodGroup;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;











@RestController
@CrossOrigin(origins="http://localhost:4200")
public class DonorsController {
@Autowired
DonorsService rs;






@PostMapping("save1")
public void addDonor(@RequestBody DonorsModel a) {
	this.rs.saveDonor(a);
}

@GetMapping("donors1")////http://localhost:8080/players
public List<DonorsModel>getAll(){//display all items
return this.rs.allDonors();
}

@PutMapping(value="/update1")
public void updateDonor(@RequestBody DonorsModel p) {
	System.out.println("update1");
	this.rs.updateDonor(p);
}

@PostMapping("delete1")
public void deleteDonor(@RequestBody DonorsModel p) {
	this.rs.removeDonor(p);
	System.out.println("delete function working!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

@PostMapping("view1")//view1/search id
public DonorsModel getDonorById(@RequestBody DonorsModel id){
	int id1=id.getId();
return rs.getDonorById(id1);
}

}























//@GetMapping("registers")////http://localhost:8080/registers
//public List<RegistersModel>getAll(){
//return this.rs.allRegisters();
//}



//@PostMapping("view1")
//public RegistersModel getRegisterById(@RequestBody RegistersModel id){
//	int id1=id.getId();
//return rs.getRegisterById(id1);
//}
//
//
//@PutMapping(value="/update")
//public void updateRegister(@RequestBody RegistersModel r) {
//	this.rs.updateRegister(r);
//}
//@PostMapping("delete")
//public void deleteRegister(@RequestBody RegistersModel r) {
//	this.rs.removeRegister(r);
//	System.out.println("delete function working!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//}