const Joi = require("joi");

// validation schema
const postValidation = (data) => {
  const schema = Joi.object({
    tunnel: Joi.string(),
    date: Joi.string(),
    advanceName: Joi.string(),
    advanceLocationFrom: Joi.string(),
    advanceLocationTo: Joi.string(),
    depthCover: Joi.string(),
    driveDirection: Joi.string(),
    excavated: Joi.string(),
    overbreak: Joi.string(),
    underbreak: Joi.string(),

    excavationSection: Joi.string(),
    excavationMethod: Joi.string(),
    ressNo: Joi.string(),

    facemappingSketchImg: Joi.string(),
    water: Joi.string(),
    lPerMinPerM: Joi.string(),
    geologicalStructures: Joi.string(),

    setNo1: Joi.string(),
    setNo2: Joi.string(),
    setNo3: Joi.string(),
    setNo4: Joi.string(),
    setNo5: Joi.string(),
    setNo6: Joi.string(),

    type1: Joi.string(),
    type2: Joi.string(),
    type3: Joi.string(),
    type4: Joi.string(),
    type5: Joi.string(),
    type6: Joi.string(),

    dip1: Joi.string(),
    dip2: Joi.string(),
    dip3: Joi.string(),
    dip4: Joi.string(),
    dip5: Joi.string(),
    dip6: Joi.string(),

    dipDirection1: Joi.string(),
    dipDirection2: Joi.string(),
    dipDirection3: Joi.string(),
    dipDirection4: Joi.string(),
    dipDirection5: Joi.string(),
    dipDirection6: Joi.string(),

    roughness1: Joi.string(),
    roughness2: Joi.string(),
    roughness3: Joi.string(),
    roughness4: Joi.string(),
    roughness5: Joi.string(),
    roughness6: Joi.string(),

    infilling1: Joi.string(),
    infilling2: Joi.string(),
    infilling3: Joi.string(),
    infilling4: Joi.string(),
    infilling5: Joi.string(),
    infilling6: Joi.string(),

    weathering1: Joi.string(),
    weathering2: Joi.string(),
    weathering3: Joi.string(),
    weathering4: Joi.string(),
    weathering5: Joi.string(),
    weathering6: Joi.string(),

    spacing1: Joi.string(),
    spacing2: Joi.string(),
    spacing3: Joi.string(),
    spacing4: Joi.string(),
    spacing5: Joi.string(),
    spacing6: Joi.string(),

    aperture1: Joi.string(),
    aperture2: Joi.string(),
    aperture3: Joi.string(),
    aperture4: Joi.string(),
    aperture5: Joi.string(),
    aperture6: Joi.string(),

    persistence1: Joi.string(),
    persistence2: Joi.string(),
    persistence3: Joi.string(),
    persistence4: Joi.string(),
    persistence5: Joi.string(),
    persistence6: Joi.string(),

    remarks1: Joi.string(),
    remarks2: Joi.string(),
    remarks3: Joi.string(),
    remarks4: Joi.string(),
    remarks5: Joi.string(),
    remarks6: Joi.string(),


    strength: Joi.string(),
    brightness: Joi.string(),
    tincture: Joi.string(),
    colour: Joi.string(),
    texture: Joi.string(),
    weather: Joi.string(),
    grainSize: Joi.string(),
    igneousRock: Joi.string(),
    otherRockType: Joi.string(),
    additionalDescription: Joi.string(),
    notes: Joi.string(),
    photos: Joi.string(),
    qIndex: Joi.string(),
    massQuality: Joi.string(),

    rqd: Joi.string(),
    jn: Joi.string(),
    jr: Joi.string(),
    ja: Joi.string(),
    jw: Joi.string(),
    srf: Joi.string(),

    supporting: Joi.string(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3),
    password: Joi.string().min(4),
  });
  return schema.validate(data);
};

module.exports ={ postValidation, loginValidation };
