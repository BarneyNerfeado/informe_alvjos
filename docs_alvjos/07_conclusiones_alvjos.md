# Conclusion y recomendaciones

### Reflexion final

El caso de FICOBA demuestra que las bases de datos gubernamentales, por mas robustas que parezcan, el humano en la mayoria de los casos es el factor con mas area a posibles ataques. El hecho que 1.2 millones de registros financieros fueran vulnerados unicamente por la obtencion de credenciales de funcionarios demuestra una falla en los controles de acceso y en la validacion de identidad en el sistema.

<br>

### Recomendaciones

1. **Autenticacion Multifactor (MFA) Robusta:**

Exigir MFA obligatorio, idealmente mediante tokens fisicos o biometria, para todos los accesos a bases de datos estatales. Esto neutraliza de inmediato el riesgo de credenciales comprometidas.

2. **Implementacion de Arquitectura "Confianza Cero":**

Aplicar el principio de minimo privilegio. Un funcionario publico estandar no deberia tener los permisos tecnicos para consultar 1,2 millones de registros de una sola vez.

3. **Capacitación Continua:**

Establecer programas obligatorios de concientizacion en ciberseguridad para los funcionarios, enfocados en detectar ataques de phishing, que suele ser la principal forma para el robo de claves.