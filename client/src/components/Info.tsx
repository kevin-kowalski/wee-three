import { InfoProps } from './utils/Types.js';

function Info({ currentModel }: InfoProps) {

  /**
   * Constants
   */

  const dateFmt = new Date(currentModel?.date).toLocaleDateString('de-DE') ?? '';
  const description = currentModel?.description ?? '';
  const author = currentModel?.author ?? '';
  const source = currentModel?.source ?? '';

  /**
   * Render component
   */

  return (<>
    {!currentModel && (
      <div className="object-info loading">
        <h3>Loading..</h3>
      </div>
    )}
    {currentModel && (
      <div className="object-info">
        <div className="details">
          <h3 className='object-title'>{currentModel.title}</h3>
          <p>
            {description} <span className="date">({dateFmt})</span>
          </p>
          <p>{author}</p>
          <p className="source">
            {source ? (
              <a href={source} target="_blank">
                {source}
              </a>
            ) : (
              ''
              )}
          </p>
        </div>
      </div>
    )}
  </>);
}

export default Info;