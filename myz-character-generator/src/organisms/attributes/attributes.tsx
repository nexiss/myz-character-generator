import { useDispatch } from 'react-redux';
import { Attribute, Attributes } from '../../models';
import AttributeComponent from '../../molecules/attribute/attribute';
import StoreSelectors from '../../store/selectors';
import { updateAttributes } from '../../store/store';

export const AttributesComponent = () => {
  const updateAttribute = (key: keyof Attributes, value: string) => {
    return dispatch(
      updateAttributes({
        attributes: {
          ...current.attributes,
          [key]: Number(value),
        },
      })
    );
  };

  const { current } = StoreSelectors();

  const dispatch = useDispatch();

  return (
    <div>
      <AttributeComponent
        value={current.attributes.strength}
        attribute={Attribute.STRENGTH}
        onUpdate={updateAttribute}
      ></AttributeComponent>
      <AttributeComponent
        value={current.attributes.agility}
        attribute={Attribute.AGILITY}
        onUpdate={updateAttribute}
      ></AttributeComponent>
      <AttributeComponent
        value={current.attributes.wits}
        attribute={Attribute.WITS}
        onUpdate={updateAttribute}
      ></AttributeComponent>
      <AttributeComponent
        value={current.attributes.empathy}
        attribute={Attribute.EMPATHY}
        onUpdate={updateAttribute}
      ></AttributeComponent>
    </div>
  );
};

export default AttributesComponent;
