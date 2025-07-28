import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sistema Integral MAMORÉ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Reemplaza con el SVG de Mamoré si tienes uno
    description: (
      <>
        Gestión administrativa y financiera completa para el Gobierno Autónomo Departamental. Automatización, centralización y optimización de recursos.
      </>
    ),
    url: 'https://mamore.beni.gob.bo/', // URL para el enlace del título
  },
  {
    title: 'Sistema de Correspondencia SISCOR',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Reemplaza con el SVG de SISCOR si tienes uno
    description: (
      <>
        Administra y controla el flujo de correspondencia interna y externa, asegurando la trazabilidad y eficiencia en la comunicación oficial.
      </>
    ),
    url: 'https://siscor.beni.gob.bo/' 
  },
  {
    title: 'Sistema de ALMACÉN',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, // Reemplaza con el SVG de Almacén si tienes uno
    description: (
      <>
        Gestión integral de inventarios y activos. Control de entradas, salidas, stock, y valorización de bienes de manera eficiente.
      </>
    ),
    url: 'https://almacen.beni.gob.bo/'
  },
];

function Feature({Svg, title, description, url}) { // Añadimos url a las props
  const TitleComponent = url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Heading as="h3">{title}</Heading>
    </a>
  ) : (
    <Heading as="h3">{title}</Heading>
  );

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {TitleComponent}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
