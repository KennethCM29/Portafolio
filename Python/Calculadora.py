def suma(a, b):
    """Suma dos números"""
    return a + b

def resta(a, b):
    """Resta dos números"""
    return a - b

def multiplicacion(a, b):
    """Multiplica dos números"""
    return a * b

def division(a, b):
    """Divide dos números"""
    if b == 0:
        return "Error: No se puede dividir entre cero"
    return a / b

def mostrar_menu():
    """Muestra el menú de opciones"""
    print("\n" + "="*40)
    print("        CALCULADORA SIMPLE")
    print("="*40)
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicación")
    print("4. División")
    print("5. Salir")
    print("="*40)

def obtener_numero(mensaje):
    """Obtiene un número válido del usuario"""
    while True:
        try:
            return int(input(mensaje))
        except ValueError:
            print("Error: Por favor ingrese un número válido")

def main():
    """Función principal de la calculadora"""
    print("¡Bienvenido a la Calculadora Simple!")
    
    while True:
        mostrar_menu()
        
        opcion = input("\nSeleccione una opción (1-5): ")
        
        if opcion == '5':
            print("¡Gracias por usar la calculadora! ¡Hasta luego!")
            break
        
        if opcion not in ['1', '2', '3', '4']:
            print("Opción inválida. Por favor seleccione 1-5")
            continue
        
        # Obtener números
        num1 = obtener_numero("\nIngrese el primer número: ")
        num2 = obtener_numero("Ingrese el segundo número: ")
        
        # Realizar operación
        if opcion == '1':
            resultado = suma(num1, num2)
            operacion = "suma"
        elif opcion == '2':
            resultado = resta(num1, num2)
            operacion = "resta"
        elif opcion == '3':
            resultado = multiplicacion(num1, num2)
            operacion = "multiplicación"
        elif opcion == '4':
            resultado = division(num1, num2)
            operacion = "división"
        
        # Mostrar resultado
        print(f"\nResultado de la {operacion}: {resultado}")

if __name__ == "__main__":
    main()
