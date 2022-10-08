import { useDispatch, useSelector } from 'react-redux';
import { Attribute, Attributes, CharacterSheet } from '../../models';
import AttributeComponent from '../../molecules/attribute/attribute';
import { RootState } from '../../store/state';
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

  const current = useSelector<{ root: RootState }, CharacterSheet>(
    (state) => state.root.current
  );

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
