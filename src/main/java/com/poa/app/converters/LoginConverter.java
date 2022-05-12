package com.poa.app.converters;

import org.mapstruct.Mapper;

import com.poa.app.LoginRequest;
import com.poa.app.domain.Login;

@Mapper
public interface LoginConverter {
	
	Login convertLoginRequest(LoginRequest loginRequest);

}
