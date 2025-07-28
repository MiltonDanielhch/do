
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Inicio',
    },
    {
      type: 'category',
      label: '📋 Sistema Mamoré',
      link: {
        type: 'doc',
        id: 'mamore/intro',
      },
      items: [
        {
          type: 'category',
          label: '👥 Contrataciones',
          link: { type: 'doc', id: 'mamore/contrataciones/intro' },
          items: [
            'mamore/contrataciones/lista-persona',
            'mamore/contrataciones/crear-persona',
            'mamore/contrataciones/bono-antiguedad',
            'mamore/contrataciones/tipos-planillas',
            'mamore/contrataciones/programas-proyectos',
            'mamore/contrataciones/cargos',
            'mamore/contrataciones/cargos-alternos',
            'mamore/contrataciones/firmas-autorizadas',
            {
              type: 'category',
              label: '📄 Contratos',
              items: [
                'mamore/contrataciones/crear-contrato',
                'mamore/contrataciones/lista-contrato'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '📊 Planillas',
          link: { type: 'doc', id: 'mamore/planillas/intro' },
          items: [
            {
              type: 'category',
              label: '📄 Plantillas',
              items: [
                'mamore/planillas/planillas/lista-planilla',
                'mamore/planillas/planillas/crear-planilla',
              ]
            },
            
            {
              type: 'category',
              label: 'Aguinaldos',
              items: [
                'mamore/planillas/aguinaldos/lista-aguinaldos',
                'mamore/planillas/aguinaldos/crear-aguinaldos',
              ]
            },
           
            {
              type: 'category',
              label: 'Archivos',
              items: [
               'mamore/planillas/archivos/lista-archivos',
               'mamore/planillas/archivos/crear-archivos',
              ]
            },
            {
              type: 'category',
              label: 'Periodos',
              items: [
               'mamore/planillas/periodos/lista-periodos',
               'mamore/planillas/periodos/crear-periodos',
              ]
            },
            {
              type: 'category',
              label: 'Cajas',
              items: [
              'mamore/planillas/cajas/lista-cajas',
              'mamore/planillas/cajas/crear-cajas',
              ]
            },
            {
              type: 'category',
              label: 'Pagos',
              items: [
              'mamore/planillas/pagos/lista-pagos',
              ]  
            },
            {
              type: 'category',
              label: 'Planillas Adicionales',
              items: [
               'mamore/planillas/planillas-adicionales/lista-planillas-adicionales',
               'mamore/planillas/planillas-adicionales/crear-planillas-adicionales', 
              ]
            },
            'mamore/planillas/tickets-caja',
            'mamore/planillas/imprimir-tickets',
          ]
        },
        'mamore/cheques',
        {
          type: 'category',
          label: '🛡️ Prevision Social',
          link: { type: 'doc', id: 'mamore/prevision_social/intro' },
          items: [
            'mamore/prevision_social/cheques',
            'mamore/prevision_social/pagos',
            'mamore/prevision_social/planillas-manuales',
          ]
        },
        {
          type: 'category',
          label: '💸 Finanzas',
          link: { type: 'doc', id: 'mamore/finanzas/intro' },
          items: [
              'mamore/finanzas/beneficiarios',
              'mamore/finanzas/categorias-memo',
              'mamore/finanzas/memos',
              'mamore/finanzas/tipos-memo',
          ]
        },
        {
          type: 'category',
          label: '🏭 Activos Fijos',
          link: { type: 'doc', id:'mamore/activos-fijos/intro' },
          items: [
          'mamore/activos-fijos/activos',
          'mamore/activos-fijos/grupos',
          'mamore/activos-fijos/mantenimientos', 
          'mamore/activos-fijos/secciones',  
          ]
        },
        {
          type: 'category',
          label: '📋 Parametros',
          link: { type: 'doc', id:'mamore/parametros/intro' },
          items: [
           'mamore/parametros/direcciones',
           'mamore/parametros/unidades-admin',
           'mamore/parametros/tipos-afp',
           'mamore/parametros/tipos-seguro-social',
           'mamore/parametros/beneficiarios',
           'mamore/parametros/dependencias',
           'mamore/parametros/oficinas',
           'mamore/parametros/paises',
           'mamore/parametros/departamentos-estados',
           'mamore/parametros/ciudades',
           'mamore/parametros/tipos-cheques',
           'mamore/parametros/bono-antiguedad',
           'mamore/parametros/tipos-inamovilidad',
           'mamore/parametros/tipos-beneficiarios',
           'mamore/parametros/feriados',
           'mamore/parametros/trabajos-recurrentes',
           'mamore/parametros/tipo-permisos',
          ]
        },
        {
          type: 'category',
          label: '📊 Reportes',
          link: { type: 'doc', id:'mamore/reportes/intro' },
          items: [
            'mamore/reportes/datos-personales',
            'mamore/reportes/contraloria',
            'mamore/reportes/aniversarios',
            'mamore/reportes/pagos-seguro-social',
            'mamore/reportes/cheques',
            'mamore/reportes/planillas-manuales',
            'mamore/reportes/aportes-individuales',
            'mamore/reportes/pagos-cheques',
            'mamore/reportes/contrataciones',
            'mamore/reportes/caratula',
            'mamore/reportes/planillas',
            'mamore/reportes/pagos-anuales',
            'mamore/reportes/generar-excel',
            'mamore/reportes/cajas',
            'mamore/reportes/pagos-realizados',
            'mamore/reportes/cierres-boveda',
            'mamore/reportes/contratos',
           'mamore/reportes/adendas',
           'mamore/reportes/cargos',
           'mamore/reportes/pagos-planillas',
           'mamore/reportes/parentescos',
           'mamore/reportes/proyectos',
           'mamore/reportes/aguinaldos',
           'mamore/reportes/marcaciones',
           'mamore/reportes/mantenimientos',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '📨 SISCOR',
      link: { type: 'doc', id: 'siscor/intro' },
      items: [
        'siscor/bandeja',
        'siscor/entradas',
        'siscor/certificados',
        {
          type: 'category',
          label: '✉️ Parametros',
          items: [
            'siscor/parametros/personas-externas',
            'siscor/parametros/cargos-adicionales',
            'siscor/parametros/categorias',
            'siscor/parametros/entidades',
            'siscor/parametros/acciones',
            'siscor/parametros/departamentos',
            'siscor/parametros/estados',
            'siscor/parametros/tipos',
          ]
        },
        'siscor/directorio-telefonico',
        'siscor/directorio-grupos',
        'siscor/reportes'
      ]
    },
    {
      type: 'category',
      label: '📦 Almacén',
      link: { type: 'doc', id: 'almacen/intro' },
      items: [
        {
          type: 'category',
          label: '📊 Ingreso-Egreso',
          items: [
            'almacen/ingreso-egreso/ingresos',
            'almacen/ingreso-egreso/egresos',
          ]
        },
        'almacen/solicitudes',
        'almacen/solicitudes-inexistentes',
        'almacen/producto-existentes',
        'almacen/pedidos',
        {
          type: 'category',
          label: 'Reportes-Anuales',
          items: [
            'almacen/reportes-anuales/inv-anual-da',
            'almacen/reportes-anuales/inv-anual-da-central',
            'almacen/reportes-anuales/inv-anual-partida',
            'almacen/reportes-anuales/ingreso-anual-partida',
            'almacen/reportes-anuales/inv-anual-detalle-item',
          ]
        },
        {
          type: 'category',
          label: 'Reporte-articulos',
          items: [
            'almacen/reporte-articulos/lista-articulos',
            'almacen/reporte-articulos/stock-disponibles',
            'almacen/reporte-articulos/ingresos-oficinas',
            'almacen/reporte-articulos/egresos-oficinas',
          ]
        },
        {
          type: 'category',
          label: 'Reporte-partidas',
          items: [
            'almacen/reporte-partidas/ingreso-partida-gestion',
          ]
        },
        {
          type: 'category',
          label: 'Reporte-proveedores',
          items: [
            'almacen/reporte-proveedores/lista-proveedores',
            'almacen/reporte-proveedores/usuarios',
          ]
        },
        {
          type: 'category',
          label: 'opcion-almacen',
          items: [
            'almacen/opcion-almacen/personas-externas',
            'almacen/opcion-almacen/sucursales',
            'almacen/opcion-almacen/inventario-gestion',
            'almacen/opcion-almacen/proveedores',
            'almacen/opcion-almacen/partidas',
            'almacen/opcion-almacen/articulos',
            'almacen/opcion-almacen/modalidad-compras',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: '📈 Diagramas',
      items: [
        'diagramas/flujos',
        'diagramas/arquitectura'
      ]
    },
    {
      type: 'category',
      label: '🛠️ Soporte',
      items: [
        'soporte/faq',
        'soporte/contacto',
        'soporte/changelog'
      ]
    }
  ]
};

module.exports = sidebars;