package com.BloodGroup;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BloodGroup.DAO.DonorsDAO_Repository;









@Service
public class DonorsService {
@Autowired
DonorsDAO_Repository pr;
public DonorsService() {
	
}







public void saveDonor(DonorsModel a1) {
	pr.save(a1);
}

public List allDonors() {
	return pr.findAll();//display all items
}

public void updateDonor(DonorsModel p) {
pr.save(p);
}

public void removeDonor(DonorsModel p) {
	int id=p.getId();
	DonorsModel p1=pr.getOne(id);
	pr.delete(p1);
}

public DonorsModel getDonorById(int id) {
	Optional<DonorsModel>pm=pr.findById(id);//search
	if(pm.isPresent()){
		return pm.get();
	} 
	else
		return null;
	}






}


//}