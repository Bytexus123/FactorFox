import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

interface CoulmnSectionProps {
  children?: any[] | JSX.Element | JSX.Element[];
  title?: string;
}

const CoulmnSection = ({ children, title }: CoulmnSectionProps) => {
  children = React.Children.toArray(children);
  return (
    <>
      <Card>
        {title && (
          <CardHeader>
            <CardTitle>
              <div className="d-flex justify-content-between">
                <span>{title}</span>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />
                    Show All
                  </Label>
                </FormGroup>
              </div>
            </CardTitle>
          </CardHeader>
        )}
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
};

export default CoulmnSection;
