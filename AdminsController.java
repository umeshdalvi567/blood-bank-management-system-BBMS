package com.BloodGroup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BloodGroup.DAO.AdminsDAO_Repository;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AdminsController {
@Autowired
AdminsDAO_Repository rd;
@Autowired
AdminsService as;



@PostMapping("save2")
public void addAdmin(@RequestBody AdminsModel r) {
	System.out.println("Hello i am from springboot");
	this.as.saveAdmin(r);
}



@PostMapping("login2")
ResponseEntity<?> adminLogin(@RequestBody AdminsModel r){
	AdminsModel reg=rd.findByEmail(r.getEmail());
	System.out.println(reg);
	if(reg.getPassword().equals(r.getPassword())) {
		return ResponseEntity.ok(reg);
	}
	return (ResponseEntity<?>)ResponseEntity.internalServerError();
}


}
