package com.poa.app.adapters.secondary;

import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import com.poa.app.domain.Login;
import com.poa.app.ports.secondary.LoginRepository;

@Component
public class LoginRepositoryImpl implements LoginRepository{

	@Override
	public Login login(Login login) {
		return !ObjectUtils.isEmpty(login) ? login : null;
	}

}
