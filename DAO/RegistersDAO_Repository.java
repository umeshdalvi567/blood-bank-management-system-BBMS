package com.BloodGroup.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BloodGroup.RegistersModel;

public interface RegistersDAO_Repository extends JpaRepository<RegistersModel, Integer>{
	public RegistersModel findByEmail(String email);

}
