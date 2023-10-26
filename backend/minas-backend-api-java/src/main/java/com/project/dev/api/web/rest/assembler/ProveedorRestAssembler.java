/*
 * @fileoverview    {ProveedorRestAssembler}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.ProveedorDTO;
import com.project.dev.api.web.rest.ProveedorRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code ProveedorRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class ProveedorRestAssembler implements RepresentationModelAssembler<ProveedorDTO, EntityModel<ProveedorDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<ProveedorDTO> toModel(ProveedorDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ProveedorRest.class).getEntity(String.valueOf(entityDTO.getStrCif()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ProveedorRest.class).getAllEntities()).withRel("Proveedor"));
    }
}
