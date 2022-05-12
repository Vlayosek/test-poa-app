package com.poa.app.ports.secondary;

import org.springframework.stereotype.Component;

import com.poa.app.domain.Login;

@Component
public interface LoginRepository {
	
	Login login(Login login);

}
