export default {
	'login': {
		'header': 'Swag Labs',
		'loginButton': 'LOGIN',
		'password': 'Contraseña',
		'screen': 'Login',
		'biometry': 'biometry',
		'fingerprint': 'fingerprint',
		'faceRecognition': 'face-recognition',
		'username': 'Usuario',
		'loginText': {
			'usernamesText': 'Los usuarios aceptados para esta aplicación son (toque para autocompletar):',
			'standard': 'standard_user',
			'locked': 'locked_out_user',
			'problem': 'problem_user',
			'passwordText': 'Y la contraseña para todos los usuarios es:',
			'password': 'secret_sauce',
		},
		'errors': {
			'container': 'Error',
			'epicSadFace': 'Epic sadface: ',
			'password': 'Contraseña es requerida',
			'lockedOut': 'Lo sentimos, este usuario ha sido bloqueado.',
			'noMatch': 'El usuario y contraseña no coinciden con ningun usuario en este servicio.',
			'username': 'Usuario es requerido',
		},
	},
	'username': 'Usuario',
	'cartContent': {
		'checkout': 'CHECKOUT',
		'continueShopping': 'CONTINUAR COMPRANDO',
		'description': 'DESCRIPCIÓN',
		'header': 'TU CARRITO',
		'quantity': 'CANT',
		'screen': 'Contenidos de carrito',
		'cartItem': {
			'itemContainer': 'Item',
			'description': 'Descripción',
			'amount': 'Cantidad',
			'remove': 'REMOVER',
			'delete': 'Delete',
			'price': 'Precio',
		},
	},
	'checkoutPageOne': {
		'errors': {
			'container': 'Error',
			'epicSadFace': 'Epic sadface: ',
			'firstName': 'Nombre es requerido',
			'lastName': 'Apellido es requerido',
			'postalCode': 'Código postal es requerido',
		},
		'header': 'CHECKOUT: INFORMACIÓN',
		'firstName': 'Nombre',
		'lastName': 'Apellido',
		'postalCode': 'Código postal',
		'screen': 'Checkout: Tu información',
		'cancelButton': 'CANCELAR',
		'continueButton': 'CONTINUAR',
	},
	'checkoutPageTwo': {
		'header': 'CHECKOUT: RESUMEN',
		'screen': 'CHECKOUT: RESUMEN',
		'description': 'DESCRIPCIÓN',
		'quantity': 'QTY',
		'item': {
			'container': 'Item',
			'description': 'Descripción',
			'amount': 'Cantidad',
			'price': 'Precio',
		},
		'summary': {
			'paymentLabel': 'Información de pago:',
			'card': 'SauceCard #31337',
			'shippingLabel': 'Información de envío:',
			'shippingText': 'SERVICIO A DOMICILIO GRATUITO!',
			'itemsTotal': 'Subtotal: ',
			'itemsTax': 'I.V.A.: ',
			'totalAmount': 'Total: ',
		},
		'finishButton': 'TERMINAR',
		'cancelButton': 'CANCELAR',
	},
	'checkoutCompletePage': {
		'header': 'CHECKOUT: COMPLETADO!',
		'screen': 'CHECKOUT: COMPLETADO!',
		'completeContainer': {
			'header': 'GRACIAS POR SU ORDEN',
			'text': 'Su orden ha sido procesada y llegara cuanto antes!',
		},
		'goToButton': 'REGRESO A MENU',
	},
	'inventoryListPage': {
		'header': 'PRODUCTOS',
		'screen': 'PRODUCTOS',
		'dropZone': 'Zona de caída del carrito de compras',
		'addButton': 'AÑADIR A CARRITO',
		'removeButton': 'REMOVER',
		'itemContainer': 'Articulo',
		'itemTitle': 'Titulo de articulo',
		'itemDescription': 'Descripción de articulo',
		'dragHandle': 'Drag Handle',
		'price': 'Precio',
		'toggle': 'Alternar',
	},
	'inventoryItemPage': {
		'screen': 'Pagina de inventario',
		'itemNotFound': {
			'name': 'Articulo no encontrado',
			'description': 'Lo sentimos, la llamada no pudo ser completada como ha sido completada.\nPor favor rectifique su numero y trate de nuevo.\nSi necesita asistencia, marque 0 para ser conectado con la operadora.\nEsto es una grabación.\n4 T 1.',
			'price': '√-1',
		},
		'imageContainer': 'Image Container',
		'addButton': 'AÑADIR A CARRITO',
		'backButton': 'REGRESO A PRODUCTOS',
		'removeButton': 'REMOVER',
		'itemDescription': 'Descripción',
		'price': 'Precio',
	},
	'webview': {
		'header': 'WEBVIEW',
		'screen': 'WEBVIEW SELECCIÓN',
		'errorContainer': 'Error',
		'placeholder': 'Ingrese un URL...',
		'urlError': 'Por favor ingrese un URL valido.',
		'go': 'IR A SITIO',
	},
	'modalSelector': {
		'button': 'Modal Selector Button',
		'cancel': 'Cancel',
		'container': 'Selector container',
		'sectionLabel': 'Sort items by...',
		'azLabel': 'Name (A to Z)',
		'zaLabel': 'Name (Z to A)',
		'loHiLabel': 'Price (low to high)',
		'hiLoLabel': 'Price (high to low)',
	},
	'cart': {
		'label': 'Carrito',
	},
	'menu': {
		'label': 'Menu',
		'close': 'Cerrar',
		'allItems': 'TODOS LOS ARTICULOS',
		'about': 'NOSOTROS',
		'logout': 'CERRAR SESION',
		'qrCode': 'QR CODE ESCÁNER',
		'geoLocation': 'UBICACIÓN GEOGRÁFICA',
		'drawing': 'DIBUJO',
		'reset': 'RESET APP STATE',
		'webview': 'WEBVIEW',
	},
	'geoLocation': {
		'header': 'GEOLOCALIZACIÓN',
		'screen': 'GEOLOCALIZACIÓN-SCREEN',
		'text': 'A continuación encontrará la latitud y la longitud. Puede usar Appium para cambiarlas con',
		'appiumLink': 'http://appium.io/docs/en/commands/session/geolocation/set-geolocation/',
		'this': ' este ',
		'link': 'enlace.',
		'determinePosition': 'Determinar su ubicación en Android puede tomar tiempo.',
		'errorSettings': 'No se puede abrir la configuración',
		'locationPermission': 'Permiso de ubicación denegado',
		'enableLocation': 'Encienda la opcion de Ubicación para determinar su ubicación.',
		'toSettings': 'Ir a la configuración.',
		'dontUse': 'No use la ubicación.',
		'deniedByUser': 'Permiso de ubicación denegado por el usuario.',
		'position': 'Determinando ubicación...',
		'latitude': 'latitud',
		'longitude': 'longitud',
	},
	'drawing': {
		'header': 'DIBUJO',
		'screen': 'DIBUJO-SCREEN',
		'clear':'ELIMINAR',
		'save':'GUARDAR',
		'ok': 'OK',
		'cancel': 'CANCEL',
		'saveDrawing': 'Save drawing',
		'savedGallery': 'Drawing saved successfully to gallery',
		'failedSave': 'Failed to save drawing',
		'grantPermissionsMessage': 'Grant me permission to save the drawing',
		'downloadPermissionsTitle': 'Drawing download permission',
		'downloadPermissionsRequiredMessage': 'Your permission is required to save the drawing to your device',
		'androidPermissions': 'Android permissions',
		'androidPermissionsFailed': 'Android permissions failed',
	},
	'appHeader': {
		'label': 'Swag Labs',
		'url': 'https://saucelabs.com/',
		'404Url': 'https://saucelabs.com/error/404',
	},
	'footer': {
		'rights': 'Sauce Labs. Todos los derechos reservados.',
		'termsAndPrivacy': 'Términos de servicio | Acuerdo de Privacidad',
	},
	'products': {
		'backpack': {
			name: 'Mochila Sauce Labs',
			desc: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
			price: 29.99,
		},
		'bikeLight': {
			name: 'Luz de bicicleta Sauce Labs',
			desc: 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.',
			price: 9.99,
		},
		'boltShirt': {
			name: 'Camisa Sauce Labs Bolt',
			desc: 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
			price: 15.99,
		},
		'fleeceJacket': {
			name: 'Chamarra Sauce Labs',
			desc: 'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.',
			price: 49.99,
		},
		'onesie': {
			name: 'Mameluco Sauce Labs',
			desc: 'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.',
			price: 7.99,
		},
		'tattRed': {
			name: 'Camisa Test.allTheThings() (Roja)',
			desc: 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
			price: 15.99,
		},
	},
};
