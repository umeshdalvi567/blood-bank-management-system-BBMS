package com.BloodGroup.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BloodGroup.AdminsModel;


public interface AdminsDAO_Repository extends JpaRepository<AdminsModel, Integer>{
	public AdminsModel findByEmail(String email);
}
