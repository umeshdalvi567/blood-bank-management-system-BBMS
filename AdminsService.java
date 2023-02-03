package com.BloodGroup;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BloodGroup.DAO.AdminsDAO_Repository;



	@Service
	public class AdminsService {
	@Autowired
	AdminsDAO_Repository ar;
	public AdminsService() {
		
	}

	public void saveAdmin(AdminsModel p) {
		ar.save(p);
	}

	public List allAdmins() {
		return ar.findAll();//display all items for web
	}

	}
