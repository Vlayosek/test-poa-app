package com.poa.app.adapters.primary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.mapstruct.factory.Mappers;

import com.poa.app.LoginRequest;
import com.poa.app.converters.LoginConverter;
import com.poa.app.domain.Login;
import com.poa.app.ports.primary.LoginService;

@RestController
@RequestMapping("/login")
@Component
public class LoginController {

	@Autowired
    private LoginService loginService;
	
	private LoginConverter converter = Mappers.getMapper(LoginConverter.class);
	
	public LoginController() {

    }
	
	public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }
	
	@PostMapping
    public ResponseEntity<Login> createLogin(@RequestParam LoginRequest login) {
        Login loginConverted = converter.convertLoginRequest(login);
        return loginService.createLogin(loginConverted);
    }
}
