/*
 * @fileoverview    {BadgeRestAssembler} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.BadgeDTO;
import com.project.dev.api.web.rest.BadgeRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code BadgeRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class BadgeRestAssembler implements RepresentationModelAssembler<BadgeDTO, EntityModel<BadgeDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<BadgeDTO> toModel(BadgeDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(BadgeRest.class).getEntity(String.valueOf(entityDTO.getStrTitle()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(BadgeRest.class).getAllEntities()).withRel("Badge"));
    }
}
