package com.poa.app;

public class LoginRequest {
	
	private String usuario;
    private String password;
    
	public LoginRequest(String usuario, String password) {
		super();
		this.usuario = usuario;
		this.password = password;
	}
		
	public LoginRequest() {
		super();
	}

	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "LoginRequest [usuario=" + usuario + ", password=" + password + "]";
	}
	
	
	

}
