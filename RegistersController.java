package com.BloodGroup;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.BloodGroup.DAO.RegistersDAO_Repository;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RegistersController {
@Autowired
RegistersDAO_Repository rd;
@Autowired
RegistersService rs;



@PostMapping("save")
public void addRegister(@RequestBody RegistersModel r) {
	System.out.println("Hello i am from springboot");
	this.rs.saveRegister(r);
}



@PostMapping("login")
ResponseEntity<?> userLogin(@RequestBody RegistersModel r){
	RegistersModel reg=rd.findByEmail(r.getEmail());
	System.out.println(reg);
	if(reg.getPassword().equals(r.getPassword())) {
		return ResponseEntity.ok(reg);
	}
	return (ResponseEntity<?>)ResponseEntity.internalServerError();
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