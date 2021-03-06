package com.poa.app.domain;

public class Login {
	
	private String usuario;
    private String password;
    
	public Login() {
	}

	public Login(String usuario, String password) {
		this.usuario = usuario;
		this.password = password;
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

	/*
	 * @Override public int hashCode() { final int prime = 31; int result = 1;
	 * result = prime * result + ((password == null) ? 0 : password.hashCode());
	 * result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
	 * return result; }
	 * 
	 * @Override public boolean equals(Object obj) { if (this == obj) return true;
	 * if (obj == null) return false; if (getClass() != obj.getClass()) return
	 * false; Login other = (Login) obj; if (password == null) { if (other.password
	 * != null) return false; } else if (!password.equals(other.password)) return
	 * false; if (usuario == null) { if (other.usuario != null) return false; } else
	 * if (!usuario.equals(other.usuario)) return false; return true; }
	 */

	@Override
	public String toString() {
		return "Login [usuario=" + usuario + ", password=" + password + "]";
	}

    
	
    
}
