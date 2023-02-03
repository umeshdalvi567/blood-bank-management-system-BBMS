package com.BloodGroup;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BloodGroup.DAO.RegistersDAO_Repository;




@Service
public class RegistersService {
@Autowired
RegistersDAO_Repository pr;
public RegistersService() {
	
}

public void saveRegister(RegistersModel p) {
	pr.save(p);
}

public List allRegisters() {
	return pr.findAll();//display all items for web
}

}


